import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import IdentityEx from './IdentityEx';
import IdentityExCode from '!raw-loader!./IdentityEx';

import { parse } from 'react-docgen';
import Identity from '!raw-loader!cyverse-ui/Identity';
const meta = parse(Identity);

const IdentityDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `Identity Example` } >
                    <IdentityEx/>
                    <CodeBlock text={ IdentityExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default IdentityDoc;
