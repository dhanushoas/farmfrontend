
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://dhanushoas.github.io/farmfrontend/',
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
    'index.csr.html': {size: 5036, hash: 'f5e76e3491ba2c86d8814186f9960cf5f8dbf9eb234069a0ac68900b27099e27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'e7128771b28bed44b49a76dd7974c9cca7f4483f50ad59f5f920ebf4cf684152', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 5265, hash: 'd209779e4b59a42e01653ddfd56113ec3f264f7e897e7121a17e81212df82fc3', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 5380, hash: 'c43fd6aa733b010591e6b7051c790a86fb176240d05f29fbecd713ad56b3ccb0', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'signin/index.html': {size: 18621, hash: 'a8d19948d8587cdce4673e2a19a8e846c23697c0f3160eb0fea8eb7561459197', text: () => import('./assets-chunks/signin_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5265, hash: '9d69fcf019eff46947a600662cb4a3d47018f9936927c855d5573ed67a7f9908', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
