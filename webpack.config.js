var path = require("path");

// Export the configuration
module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        // Main project file
        entry: "./src/index.ts",

        // Output information
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "demoRibbon" + (isDev ? "" : ".min") + ".js"
        },

        // Resolve the file names
        resolve: {
            extensions: [".js", ".ts"]
        },

        // Compiler Information
        module: {
            rules: [
                // Handle TypeScript Files
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        // Step 2 - Compile JavaScript ES6 to JavaScript Current Standards
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        },
                        // Step 1 - Compile TypeScript to JavaScript ES6
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ]
        }
    };
}