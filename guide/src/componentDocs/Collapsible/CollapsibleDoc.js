import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import CollapsibleEx from './CollapsibleEx';
import CollapsibleExCode from '!raw-loader!./CollapsibleEx';
import CollapsibleCustomEx from './CollapsibleCustomEx';
import CollapsibleCustomExCode from '!raw-loader!./CollapsibleCustomEx';
import { parse } from 'react-docgen';
import Collapsible from '!raw-loader!cyverse-ui/Collapsible';
const meta = parse(Collapsible);

class CollapsibleDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'Collapsible Example' } >
                    <CollapsibleEx/>
                    <CodeBlock text={ CollapsibleExCode } />
                </Figure>
                <Figure caption={ 'Collapsible Custom Example' } >
                    <CollapsibleCustomEx/>
                    <CodeBlock text={ CollapsibleCustomExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default CollapsibleDoc;
