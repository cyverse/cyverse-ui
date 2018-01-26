import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import CollapsibleSummaryEx from './CollapsibleSummaryEx';
import CollapsibleSummaryExCode from '!raw-loader!./CollapsibleSummaryEx';
import { parse } from 'react-docgen';
import CollapsibleSummary from '!raw-loader!cyverse-ui/CollapsibleSummary';
const meta = parse(CollapsibleSummary);

class CollapsibleSummaryDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'CollapsibleSummary Example' } >
                    <CollapsibleSummaryEx/>
                    <CodeBlock text={ CollapsibleSummaryExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default CollapsibleSummaryDoc;
