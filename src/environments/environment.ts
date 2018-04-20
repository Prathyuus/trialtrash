// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  MOVIE_API_KEY: 'f9bcc7e4314b08bea3210a7117170241',
  /** https://api.themoviedb.org/3/movie/550?api_key=f9bcc7e4314b08bea3210a7117170241*/

  MOVIE_API_URL: 'https://api.themoviedb.org/3/search/movie?api_key='
};
