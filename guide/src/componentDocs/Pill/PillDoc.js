import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/Pill.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import PillEx from './PillEx';
import PillExCode from '!raw-loader!./PillEx';

const PillDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `Pill Example` } >
                    <PillEx/>
                    <CodeBlock text={ PillExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default PillDoc;
