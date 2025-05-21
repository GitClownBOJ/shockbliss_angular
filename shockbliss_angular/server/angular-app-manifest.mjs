
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1635, hash: '1a02a29b76c24e9b174c0555e584580721ab1869c1d4cfb4960ec44db419ac8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1880, hash: '4bac2c8e9c1f45d45a7d19a9890f4e0f976c2c25cb45445b4afd0cf4992dca49', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MOYRTC73.css': {size: 897, hash: 'ybxH6hXeeSY', text: () => import('./assets-chunks/styles-MOYRTC73_css.mjs').then(m => m.default)}
  },
};
