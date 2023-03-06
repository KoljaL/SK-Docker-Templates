# svelte-dev docker image

This repository contains necessary files for creating a *svelte-dev* docker image in order to provide a quick start for developing your Svelte app with [SvelteKit](https://kit.svelte.dev/).
It contains also the tools to create a *svelte-app* docker image to be used in production, which runs a node server with the build Svelte app.
## How to use the image

If you don't have a Svelte app yet, use `make *create-example-app` in order to create a new example app with *node_modules* pre installed.

Otherwise 
1. Copy your Svelte app into ./app
2. Run `make npm-install` (if not already done)
3. Run `make start-dev`

## Create a new *svelte-dev* image with custom svelte example app
1. Alter the files in `./setup` folder and run `make build-dev` to build new svelte-dev image.
2. Run `make start-dev` in order to run your newly created svelte-dev image.

## Create the production ready *svelte-app* docker image
1. Be sure that the svelte-dev container is running.
2. Run `make build-prod``
3. Save your image to file with `make save-prod-image`, run it locally with `make start-prod` or deploy it to the cloud provider of your choice.