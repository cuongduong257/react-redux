/* eslint-disable no-useless-computed-key */
var path = require("path");
const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");

module.exports = function(config, env) {
    return Object.assign(
        config,
        override(
            fixBabelImports("import", {
                libraryName: "antd",
                libraryDirectory: "es",
                style: "css"
            }),
            addWebpackAlias({
                ["@iso/assets"]: path.resolve(
                    __dirname,
                    "src/isomorphic/assets"
                ),
                ["@iso/components"]: path.resolve(
                    __dirname,
                    "src/isomorphic/components"
                ),
                ["@iso/config"]: path.resolve(
                    __dirname,
                    "src/isomorphic/config"
                ),
                ["@iso/containers"]: path.resolve(
                    __dirname,
                    "src/isomorphic/containers"
                ),
                ["@iso/redux"]: path.resolve(__dirname, "src/isomorphic/redux"),
                ["@iso/lib"]: path.resolve(
                    __dirname,
                    "src/isomorphic/common/library"
                ),
                ["@iso/ui"]: path.resolve(__dirname, "isomorphic/common/UI")
            })
        )(config, env)
    );
};
