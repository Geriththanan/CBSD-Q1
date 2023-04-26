module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  // mode: 'development',
  //   Adding Server
  devServer: {
    port: 8001,
  },
  
};