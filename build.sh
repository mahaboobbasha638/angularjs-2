ng build --env=prod --base-href="/tdoc_temp/"
cp -r dist/* ../
cp dist/.htaccess ../
