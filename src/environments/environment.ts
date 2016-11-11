// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  // apiKey: YOUR_API_KEY,                          // OR USE A PROXY SERVER AND HAVE KEY THERE
  // endPoint: 'http://ws.audioscrobbler.com/2.0/', // DIRECT TO LASTFM : MUST HAVE apiKey SET TO USE THIS
  endPoint: 'http://localhost:3000/api',         // USING A LOCAL PROXY
  format: 'json'
};
