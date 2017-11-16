module.exports = name => (`import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import ${name}Ex from './${name}Ex';
import ${name}ExCode from '!raw-loader!./${name}Ex';
import { parse } from 'react-docgen';
import ${name} from '!raw-loader!cyverse-ui/${name}';
const meta = parse(${name});

class ${name}Doc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ '${name} Example' } >
                    <${name}Ex/>
                    <CodeBlock text={ ${name}ExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ${name}Doc;
`);
