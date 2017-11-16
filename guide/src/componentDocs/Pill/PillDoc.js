import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import PillEx from './PillEx';
import PillExCode from '!raw-loader!./PillEx';

import { parse } from 'react-docgen';
import Pill from '!raw-loader!cyverse-ui/Pill';
const meta = parse(Pill);

class PillDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `Pill Example` } >
                    <PillEx/>
                    <CodeBlock text={ PillExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default PillDoc;
