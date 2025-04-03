
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/farmfrontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/farmfrontend/dashboard",
    "route": "/farmfrontend"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G3YEUTTC.js"
    ],
    "route": "/farmfrontend/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LLZNANII.js"
    ],
    "route": "/farmfrontend/settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D5WNFUIQ.js"
    ],
    "route": "/farmfrontend/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2U4A6LJW.js"
    ],
    "route": "/farmfrontend/signup"
  },
  {
    "renderMode": 2,
    "redirectTo": "/farmfrontend/signin",
    "route": "/farmfrontend/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5008, hash: 'e40bc63685bb2cebd3cee4e86cd67d18a64dc6fe213167c420782f0097ad2475', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: 'f455553ca1b40a14395bc2a500bfa4dd1b9cb570b0f1ede74b8cbe1b8787079b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 5237, hash: 'd11bb567c7971bea57fb91e0a4140b2edccfbf2128dee4763db00c1ac3281d60', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 5352, hash: '964f1364589032b1725e9712d2bba333c2bdc6f4935e94e20ce8e705b8d8e28e', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 18593, hash: '78895e8ab51afa0fd20c283f6fb360dfcff4a963b15b7204efd5c945002ed235', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5237, hash: '6e6053cb9898127b706af3ee9dfaa8181ee893c6dfbe54299de961d508e53a3c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
