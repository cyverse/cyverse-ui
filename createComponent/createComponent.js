const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp-promise");
const args = process.argv;
const compName = args[2];
const srcDir = path.resolve(__dirname + "/../") + "/src/";
const guideDocsDir =
    path.resolve(__dirname + "/../") + "/guide/src/componentDocs/";
const guideDocsCompDir = guideDocsDir + compName + "/";
const compTemp = require("./compTemp");
const indexExpTemp = require("./indexExpTemp");
const compExTemp = require("./compExTemp");
const compDocTemp = require("./compDocTemp");
const indexDocExpTemp = require("./indexDocExpTemp");

if (!compName) {
    console.log(
        "Oops! Please pass an argument for the component name. \n e.g. `node createComponent MyComponentName`"
    );
} else {
    // Create the component
    fs.writeFile(
        srcDir + compName + ".js",
        compTemp(compName),
        err =>
            err
                ? console.log(err)
                : console.log(`${compName} created!`)
    );

    // Add component to index
    fs.appendFile(
        srcDir + "index.js",
        indexExpTemp(compName),
        err =>
            err
                ? console.log(err)
                : console.log(`${compName} added to index!`)
    );

    // Create component doc directory
    mkdirp(guideDocsDir + compName).then(res => {
        // Create component example
        fs.writeFile(
            guideDocsCompDir + compName + "Ex.js",
            compExTemp(compName),
            err =>
                err
                    ? console.log(err)
                    : console.log(`${compName} example created!`)
        );
        // Create Documentation
        fs.writeFile(
            guideDocsCompDir + compName + "Doc.js",
            compDocTemp(compName),
            err =>
                err
                    ? console.log(err)
                    : console.log(`${compName} doc created!1`)
        );
        // Add documantation to index
        fs.appendFile(
            guideDocsDir + "index.js",
            indexDocExpTemp(compName),
            err =>
                err
                    ? console.log(err)
                    : console.log(`${compName} added to index!`)
        );
    });
}
