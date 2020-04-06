// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: 'AIzaSyC5UqYZ8DoxVvHMksq8eMrXzJmdYs6UGz0',
  authDomain: 'gag-54b76.firebaseapp.com',
  databaseURL: 'https://gag-54b76.firebaseio.com',
  projectId: 'gag-54b76',
  storageBucket: 'gag-54b76.appspot.com',
  messagingSenderId: '942471976262',
  appId: '1:942471976262:web:ca0845e58b263f5d454147',
  measurementId: 'G-FFWX4LBD5T'
};

export const TOAST_MESSAGES = {
  ERROR_LOGIN : 'Tus credenciales están mal, por favor verificalas e intenta de nuevo',
  SUCCESS_LOGIN : 'Bienvenid@'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
