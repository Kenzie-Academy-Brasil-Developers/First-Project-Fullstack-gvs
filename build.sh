#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build
npm run typeorm-ts-node-commonjs migration:run dist/data-source.js
