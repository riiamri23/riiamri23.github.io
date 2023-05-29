#!/usr/bin/env sh

npm run generate
git add ./
git commit -m "testing"
git push
npm run deploy