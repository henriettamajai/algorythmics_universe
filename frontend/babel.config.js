module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_OPTIONS_API__': true,
        '__VUE_PROD_HYDRATION__': true,
      },
    ],
  ],
};
