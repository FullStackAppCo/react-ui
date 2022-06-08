#!/usr/bin/env bash
set -e

INDEX='index.ts'
DIR=$(dirname $(dirname $(realpath $0)))
SHARED_OPTIONS=('--platform=browser' '--target=es2019')

cd $DIR

rm -rf ./dist
#npx swc ./src -d ./dist

#cd ./dist
#find . -regex ".*\.\(js\|jsx\)" -not -name "$INDEX" -type f -exec echo "export * from '{}'" \; >> "$INDEX"
FILES=$(find ./src -regex ".*\.\(ts\|tsx\)" -type f)

cd "$DIR/src"
rm -f "./$INDEX"
find . -regex ".*\.\(ts\|tsx\)" -not -name "$INDEX" -type f | xargs -I {} echo "export * from '{}'" >> "./$INDEX"
sed -ri 's/\.tsx?//g' "./$INDEX"
cd "$DIR"

#NODE_ENV=production npx esbuild ./src/index.ts \
NODE_ENV=production npx esbuild $FILES \
  --format=esm \
  --outdir='./dist' \
  --outbase='./src' \
  --minify \
  --bundle \
  --pure:React.createElement \
  --external:react \
  --external:react-dom \
  --external:@fortawesome/react-fontawesome \
  --external:@fortawesome/react-svg-core \
  ${SHARED_OPTIONS[@]} &

NODE_ENV=production npx esbuild index.ts \
  --format=esm \
  --outfile='./dist/react-ui.esm.js' \
  --outbase='./src' \
  --minify \
  --bundle \
  --pure:React.createElement \
  --external:react \
  --external:react-dom \
  --external:@fortawesome/react-fontawesome \
  --external:@fortawesome/react-svg-core \
  ${SHARED_OPTIONS[@]} &

  # Generate types
  npx tsc --emitDeclarationOnly --outDir ./dist &

  wait