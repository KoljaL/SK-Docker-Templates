.DEFAULT_GOAL := start-dev

# Build the 
build-dev:
	docker compose build

# Start your svelte-dev container locally on port 3000
start-dev:
	docker compose up -d
	# Open browser at http://localhost:3000

# Stop your local svelte-dev container 
stop-dev:
	docker compose down

# Connect into svelte-dev docker container in order to run custom commands
connect-dev:
	# Please run "make start-dev" before!
	docker compose exec app sh

# Build the svelte-app prod image
build-prod:
	# Please run "make start-dev" before!
	docker compose exec app npm run build
	docker build -t svelte-app -f docker/Dockerfile-prod .
	# You can now deploy your app as docker-image "svelte-app"

# Start the svelte-app prod container locally
start-prod:
	docker run --rm -p "3333:3000" svelte-app
	# Open browser at http://localhost:3333

# Save the compressed svelte-app prod image to file "svelte-app.tgz"
save-prod-image:
	docker save svelte-app | gzip > svelte-app.tgz

# Create an example app
create-example-app: stop-dev
	docker run --rm -it --name svelte-dev-dummy -d svelte-dev
	docker cp svelte-dev-dummy:/app .
	docker stop svelte-dev-dummy
	make start-dev

# Install missing dependencies
npm-install: build-dev
	docker run --rm -it -v $(PWD)/app:/app svelte-dev npm install 
