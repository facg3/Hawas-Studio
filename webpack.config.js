const path = require("path");

module.exports = {
    "entry": "./src/client/index.js",
    "output": {
        "filename": "bundle.js",
        "path": path.resolve("public/")
    },
    "resolve": {
        "extensions": [
            ".js",
            ".jsx"
        ]
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": "babel-loader"
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.(png|jpg|gif)$/,
                "use": [
                    {
                        "loader": "file-loader",
                        "options": {
                            "name": "[path][name].[ext]",
                            "context": path.resolve("src/client/assets/")
                        }
                    }
                ]
            }
        ]
    },
    "devtool": "source-map",
    "devServer": {"historyApiFallback": true},
    "watch": true
};
