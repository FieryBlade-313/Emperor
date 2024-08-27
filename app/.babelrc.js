const presets = ["@babel/preset-react", ["@babel/preset-env", { targets: {
    esmodules: true
  } }]];
const plugins = ["@babel/plugin-syntax-dynamic-import"];
module.exports = {
  presets,
  plugins,
};
