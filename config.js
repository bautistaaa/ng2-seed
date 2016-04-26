System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },

    packages: {
        "app": {
            "main": "./main",
            "format": "register",
            "defaultExtension": "js"
        }
    },

    map: {
        "angular2": "npm:angular2@2.0.0-beta.15",
        "es6-shim": "github:es-shims/es6-shim@0.35.0",
        "rxjs": "npm:rxjs@5.0.0-beta.6",
        "typescript": "npm:typescript@1.8.10",
        "zone.js": "npm:zone.js@0.6.12",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.6.0"
        },
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:angular2@2.0.0-beta.15": {
            "reflect-metadata": "npm:reflect-metadata@0.1.2",
            "rxjs": "npm:rxjs@5.0.0-beta.6",
            "zone.js": "npm:zone.js@0.6.12"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:buffer@3.6.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "ieee754": "npm:ieee754@1.1.6",
            "isarray": "npm:isarray@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:reflect-metadata@0.1.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:rxjs@5.0.0-beta.6": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:typescript@1.8.10": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:zone.js@0.6.12": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    }
});
