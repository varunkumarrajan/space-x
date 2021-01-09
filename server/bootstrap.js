require('ignore-styles');

require('@babel/register')({
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
    }],
    //"@babel/plugin-transform-modules-commonjs",
    [
      "transform-assets",
      {
        "extensions": [
          "css",
          "svg"
        ],
        "name": "static/media/[name].[hash:8].[ext]"
      }
    ]
  ]
});

require('./index');