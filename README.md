# Google Analytics Ecommerce Demo site

### [Demo site](https://ga-demo.dhdev.co/)

## What's up with this repo?

It's just a sample HTML page with fake shop, made to trigger Universal Analytics and GA4 events for further testing. [Parcel](https://github.com/parcel-bundler/parcel) is used for serving and bundling files.

## Installation
```shell
nvm use
npm install
npm run start
```

## Building bundle

To bundle all files, run
```shell
npm run build
```

## Deployment
Deployment is done automatically on every push to `main` branch.

## Faking traffic
You can generate fake traffic and sales to the site by running `npm run cy:run`. It will launch Cypress test, which visits production site multiple times with fake source / medium.
