import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import CollapsibleDetailEx from './CollapsibleDetailEx';
import CollapsibleDetailExCode from '!raw-loader!./CollapsibleDetailEx';
import { parse } from 'react-docgen';
import CollapsibleDetail from '!raw-loader!cyverse-ui/CollapsibleDetail';
const meta = parse(CollapsibleDetail);

class CollapsibleDetailDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'CollapsibleDetail Example' } >
                    <CollapsibleDetailEx/>
                    <CodeBlock text={ CollapsibleDetailExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default CollapsibleDetailDoc;
