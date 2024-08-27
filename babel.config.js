const presets = ["@babel/react", ["@babel/preset-env", { targets: {
    esmodules: true
  } }], "@babel/preset-flow"];
const plugins = ["@babel/plugin-syntax-dynamic-import"];

const env = {
  test: {
    plugins: ["dynamic-import-node"],
  },
};

module.exports = {
  presets,
  plugins,
  env,
};
