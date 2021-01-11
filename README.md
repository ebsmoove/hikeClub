# Hike Club

Welcome to hike club, a fun little search console for the [Ontario Trail Network (OTN) Trailhead API](https://geohub.lio.gov.on.ca/datasets/mnrf::ontario-trail-network-otn-trailhead/geoservice?geometry=-144.898%2C38.917%2C-24.576%2C58.786&selectedAttribute=SIGNAGE_IND) . Very much so a work in progress.

## Setting Up Env

To see the mapping functionality one needs a google maps java script api key, if you need one, see [this link](https://developers.google.com/maps/documentation/javascript/get-api-key). Then simply copy the `env.example` file, rename it `.env` and past the key after `GOOGLE_MAPS_API_KEY=`.

## Building and running on localhost

Install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

## Testing

To run unit tests:

```sh
npm test
```

Which TBH don't run as of this moment. Not scoping itself with the projects with the .babelrc and I'm damned to figure out why. But the test file is pretty dope.

## Development Notes

### Parcel

For the scope of this project, I'm using [Parcel](https://parceljs.org/getting_started.html) as a bundler, which is great for fast prototyping but I wouldn't use in production. Zero configs are great until you need to config something, which is fine until I convince myself I want that sweet `export from` syntax ....

### "Cool" Tools

- [Styled Components](https://styled-components.com/docs) preferred css in jsx.
- [ESLint](https://eslint.org/docs/user-guide/getting-started) using airBNB ruleset and [a11y plugin](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) for accessibility (useful but not inclusive solution). Please note this `.eslintrc` is a fairly opinionated one I keep in my back pocket.
- [Prettier](https://prettier.io/) awesome code formatter. NOTE: One won't get much use out of the plugin unless they have it installed in their text editor and set to format on save (reccomended) .... or I add it to a commit hook via husky.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro), along with some additional "Testing Library" tools. Love this libraries philosophy over enzyme, basing the tests on visuals the user can see. IE button and text selectors, user events etc.
