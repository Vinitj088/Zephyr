#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies
bundle install
npm install

# Build assets
npm run build

# Run migrations
bundle exec rake db:migrate 