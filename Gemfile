source "https://rubygems.org"

# Core Rails gems
gem "rails", "~> 8.0.1"
gem "pg"
gem "puma"

# Asset Pipeline
gem "sprockets-rails"
gem "jsbundling-rails"
gem "cssbundling-rails"
gem "stimulus-rails"
gem "turbo-rails"

# Views and Data
gem "jbuilder"
gem "redcarpet" # For markdown support

# Caching and Performance
gem "redis", ">= 4.0.1"
gem "bootsnap", require: false

group :development, :test do
  gem "debug", platforms: %i[ mri windows ]
end

group :development do
  gem "web-console"
  gem "error_highlight", ">= 0.4.0", platforms: [:ruby]
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ windows jruby ]

# Add CORS support for API
gem "rack-cors"

# Deploy this application anywhere as a Docker container [https://kamal-deploy.org]
gem "kamal", require: false

# Add OmniAuth gems
gem 'omniauth'
gem 'omniauth-google-oauth2'
gem 'omniauth-rails_csrf_protection'

# Add at the top of your Gemfile, after source
gem 'dotenv-rails', groups: [:development, :test]

