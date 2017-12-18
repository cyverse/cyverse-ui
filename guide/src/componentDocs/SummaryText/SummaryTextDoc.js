import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import SummaryTextEx from './SummaryTextEx';
import SummaryTextExCode from '!raw-loader!./SummaryTextEx';
import { parse } from 'react-docgen';
import SummaryText from '!raw-loader!cyverse-ui/SummaryText';
const meta = parse(SummaryText);

class SummaryTextDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'SummaryText Example' } >
                    <SummaryTextEx/>
                    <CodeBlock text={ SummaryTextExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default SummaryTextDoc;
