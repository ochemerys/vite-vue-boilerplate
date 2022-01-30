# Deploy to Heroku

## Prerequisites 

* heroku account
* ***vite-vue*** project in heroku
* heroku cli
* heroku-repo plugin 
    ``` bash
    heroku plugins:install heroku-repo
    ```

***vite-vue*** should be deploy as a static site.

## Pre-deployment static site setup

Heroku builds ***vite-vue*** website before serving it, so we should have the heroku/nodejs buildpack set as the first buildpack.

1. Run the following cli command:

``` bash
heroku buildpacks:set heroku/nodejs -a vite-vue
```
This will remove any previously set buildpacks and set the heroku/nodejs buildpack as the only buildpack to run.

2. Make sure that once ***vite-vue*** has been built, Heroku hosts dist folder as a static site, so we add a second buildpack:

``` bash
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static.git -a vite-vue
```

This will make sure that ***vite-vue*** is treated as a static page rather than a node js application.

3. To make sure the buildpacks take the correct files, add static.json to the project root. Put the following json in there:

``` json
{
  "root": "./dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
}
```

4. Set engines in package.json

``` json
"engines": { "node": "16.x", "npm": "8.3.0" }
```

## Deployment

Push code to heroku repo main branch and make sure heroku deploys app.

``` bash
git push heroku main:main
```