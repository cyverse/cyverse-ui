import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/Identity.json';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import IdentityEx from './IdentityEx';
import IdentityExCode from '!raw-loader!./IdentityEx';

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
