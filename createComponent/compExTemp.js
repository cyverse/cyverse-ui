module.exports = name => (
`import React from 'react';
import { ${name} } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ${name}Ex = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <${name}/>
    </Paper>
);

export default ${name}Ex;`
);
