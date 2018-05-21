# gc-microapp-marketing
A tool for restaurants to manage their marketing content in GuestCenter Admin

## Installation

Ensure you have the following dependencies installed:
- [node](https://nodejs.org/en/) >= 6
- [Yarn](https://yarnpkg.com/en/docs/install) >= 0.16

**note:** All relevant commands can now be found in package.json.

#### Install dependencies, compile components, and bundle source code

`$ yarn`

`$ yarn i18n`

When add angular components (e.g. main nav) will need to also run:

`$ bower install`

`$ gulp build`



### Start the mock server on port 3000
```
yarn start
```

Point your browser to [http://localhost:3000/admin/marketing/123](http://localhost:3000/admin/marketing/123)

Where 123 is the rid


### Serve micrapp from microsite on port 9000

1. start the microsite
```npm start```

2. start microapp 
```yarn start:production```

3. Point your browser to [http://localhost:9000/admin/marketing/123](http://localhost:9000/admin/marketing/123)

Where 123 is the rid


### Start the dev server with angular shell

```
yarn start:with-ng
```

This sets a flag to pull in our shared ng-app shell from the live cdn. Provides a way to opt-out for offline development.

Point your browser to [http://localhost:3000/admin/marketing/123](http://localhost:3000/admin/marketing/123)

## Run unit tests

`$ yarn test:watch`


## Run e2e tests


## Documentation
