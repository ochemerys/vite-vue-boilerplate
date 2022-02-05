# CI/CD With Github Actions and Heroku

# Setup the heroku app
After creating an app on heroku, come back to your terminal.

``` bush
heroku login
heroku git:remote -a <app-name>
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
```

## Setup project secrets
In your heroku account settings, find your api key. Reveal it and copy it. In your github project settings, click secrets. Add a new repository secret named HEROKU_API_KEY. Paste the key you copied into the value field and save it.

Then, add a new repository secret named HEROKU_APP_NAME. Set the value to be the same as the name you chose for your heroku app ***vite-vue*** and save it.

## Setup a Github Action

With Github actions, we can easy build, test, and deploy our application. To initiate an action, we need to setup a workflow configuration. We define these under github/workflows/ from the root of the project:


## The Workflow YAML

***ci-cd-heroku.yaml*** is where you define your workflow. Using the YAML syntax, we can define things like event triggers, jobs, environment variables and more. A workflow can be made up of one or more jobs. Using contexts, we can access information about workflow runs, environments, jobs, steps, etc.

There's a lot of power in these YAML configurations. It might benefit you to take a look at the workflow YAML syntax documentation

To start, we'll define a name. This will be visible in the Github Actions tab when the workflow runs.