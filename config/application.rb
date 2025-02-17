require_relative "boot"

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
# require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
# require "action_mailbox/engine"
# require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Vanillarails
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 8.0

    # Configure the app to be API-only
    # config.api_only = true

    # Enable session/cookie middleware for API
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

    # Enable CORS with more secure configuration
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:3000', 'localhost:5173' # Add your frontend domains here
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          credentials: true
      end

      # Optional: Add a separate rule for non-credential requests
      allow do
        origins '*'
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          credentials: false
      end
    end

    # Skip assets, templates
    config.generators do |g|
      g.assets false
      g.helper false
      g.template_engine nil
    end

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    config.autoload_lib(ignore: %w[assets tasks])
  end # End of Application class
end # End of Vanillarails module