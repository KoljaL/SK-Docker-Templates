# Directus CMS

## [Source](https://github.com/a6i-palo/directus-docker-compose)

## Introduction
CMS powered by directus. This project let you run directus locally via docker compose to facilitate the development of custom extensions.

Database files are generated locally which allow configuration of the CMS and exporting as a database dump afterward.

## Prerequisite
Docker and Docker-Compose

## Quick Start

### Run Directus locally

Start Directus using docker-compose 
```
make start
```

### Clear local database storage

Clear the created database files in the `data` folder. A new database will be created when Directus is run locally.
```
make clear_db_storage
```

### Create extension module

Refer to the directus manual on creating extension [here](https://docs.directus.io/extensions/creating-extensions/). Copy the build file to the extension folder under the registered extension name.
Alternatively, refer to the **demo** extension setup under **hooks**.