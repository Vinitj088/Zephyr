# Zephyr

**Zephyr** is a modern note-taking app built with Ruby on Rails. It provides a secure and organized platform to create, manage, and edit notes with user authentication and Google OAuth integration. Designed for simplicity and productivity, Zephyr allows users to keep their notes accessible and organized from any device.

## ✨ Features

- **User Authentication:** Secure login with Google OAuth support.
- **Note Management:** Create, edit, delete, and view notes.
- **Dashboard:** Personalized dashboard to manage all your notes.
- **Markdown Support:** Write notes using markdown for rich formatting.
- **Responsive UI:** Clean interface and smooth modals for improved usability.
- **API Endpoints:** Basic RESTful API structure with authentication stubbed out for future API integrations.
- **PWA Ready:** Progressive Web App support built-in (manifest, service workers).
- **Docker Deployable:** Ready-to-run with Docker and Kamal for easy deployment.

## 🗂 Project Structure
- app/
- controllers/ # Handles web/API logic (notes, dashboard, authentication)
- models/ # User and Note ActiveRecord models
- views/ # ERB templates for notes, dashboard, layouts
- helpers/ # Markdown helpers and other view utilities
- assets/ # Stylesheets, JS, images
- javascript/ # Custom JS for dialogs, modals
- config/
- routes.rb # All URL routing, including API, OAuth, PWA, root, and dashboard
- db/
- migrate/ # Migration scripts for schema (users, notes)
- schema.rb # Current database schema


## ⚙️ Getting Started

1. **Clone the repository:**
    ```
    git clone https://github.com/Vinitj088/Zephyr.git
    cd Zephyr
    ```

2. **Install dependencies:**
    ```
    bundle install
    yarn install  # If using Webpacker
    ```

3. **Configure environment:**
    - Set Google OAuth and other secrets in `.env`.
    - Example keys: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.

4. **Database setup:**
    ```
    rails db:create db:migrate
    ```

5. **Start the Rails server:**
    ```
    rails server
    ```

6. **Access the app:**  
    Visit [http://localhost:3000](http://localhost:3000)

## 📝 Usage

- After logging in with Google, access your dashboard to manage notes.
- Create/edit notes (supports Markdown).
- Responsive layout for mobile/desktop.

## 🧰 Tech Stack

- **Backend:** Ruby on Rails 8.x, PostgreSQL
- **Frontend:** ERB, Turbo, Stimulus, custom SASS/CSS/JS
- **Auth:** OmniAuth with Google OAuth 2.0
- **Deployment:** Kamal (Docker-based) or traditional Rails deploy
- **Markdown:** Redcarpet for rendering markdown


## 🚢 Deployment

Zephyr is ready-to-ship on modern Docker hosts using Kamal. For traditional Heroku-like deploys, follow classic Rails practices. See the `Dockerfile` and deployment scripts.

---

_Built with ❤️ in Ruby on Rails by Vinit Jai_


