# Google Analytics Ecommerce Demo site
[![Netlify Status](https://api.netlify.com/api/v1/badges/7aeb5adf-a829-4176-8004-e2c1e391aaae/deploy-status)](https://app.netlify.com/sites/ga-ecomm-demo-test/deploys)

### [Demo site](https://ga-ecomm-demo-test.netlify.app/)
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
Deployment is done to Netlify automatically on every push to `main` branch.

## Faking traffic
You can generate fake traffic and sales to the site by running `npm run cy:run`. It will launch Cypress test, which visits production site multiple times with fake source / medium.
