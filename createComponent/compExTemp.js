module.exports = name =>`
import React from "react";
import { ${name}, Paper } from "cyverse-ui";

const ${name}Ex = props => (
    <Paper whitespace={["mb3", "p2"]}>
        <${name}>Hello World</${name}>
    </Paper>
);

export default ${name}Ex`;
