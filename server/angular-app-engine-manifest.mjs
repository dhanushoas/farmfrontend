
export default {
  basePath: 'https://dhanushoas.github.io/farmfrontend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
