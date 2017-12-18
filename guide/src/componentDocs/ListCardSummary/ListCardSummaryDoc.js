import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import ListCardSummaryEx from './ListCardSummaryEx';
import ListCardSummaryExCode from '!raw-loader!./ListCardSummaryEx';
import { parse } from 'react-docgen';
import ListCardSummary from '!raw-loader!cyverse-ui/ListCardSummary';
const meta = parse(ListCardSummary);

class ListCardSummaryDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ListCardSummary Example' } >
                    <ListCardSummaryEx/>
                    <CodeBlock text={ ListCardSummaryExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ListCardSummaryDoc;
