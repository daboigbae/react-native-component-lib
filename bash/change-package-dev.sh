value=`cat package.dev.json`
echo $value > package.json
rm -f yarn.lock
yarn install