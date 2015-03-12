#!/bin/bash
cd build
git init
git config user.name "Travis-CI"
git config user.email "travis@ohmage.org"
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/stevenolen/www.ohmage.org" master:gh-pages > /dev/null 2>&1