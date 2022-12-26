// Craco is being used to load ANTD in create-react-app application
// But we don't need to modify the theme via craco, since ANTD v5 supports
// theme modification via `ConfigProvider`component

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: {
            //   "@primary-color": "#eb278e",
            //   "@secondary-color": "#2C314D",
            // },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
