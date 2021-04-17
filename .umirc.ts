import { defineConfig } from 'umi';

export default defineConfig({
  theme: {
    'primary-color': '#1da57a',
  },
  locale: { antd: true },
  title: 'OKR',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
