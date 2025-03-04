#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/ynithinsameer/ynithinsameer.github.io.git main:gh-pages

cd - 