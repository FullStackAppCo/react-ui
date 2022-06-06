#!/usr/bin/env bash

set -e

DIR=$(dirname $(dirname $(realpath $0)))

echo $DIR

cd ./src
rm index.esm.js
find . -name '*.js' -not -name 'index.esm.js' -type f -exec echo "export * from '{}'" \; >> index.esm.js
cd $DIR
rm -rf ./dist
npx swc ./src -d ./dist
