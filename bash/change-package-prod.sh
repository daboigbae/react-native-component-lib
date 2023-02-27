value=`cat package.prod.json`
echo $value > package.json
rm -f yarn.lock
yarn install