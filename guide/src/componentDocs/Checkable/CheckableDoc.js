import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import CheckableEx from './CheckableEx';
import CheckableExCode from '!raw-loader!./CheckableEx';
import { parse } from 'react-docgen';
import Checkable from '!raw-loader!cyverse-ui/Checkable';
const meta = parse(Checkable);

class CheckableDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'Checkable Example' } >
                    <CheckableEx/>
                    <CodeBlock text={ CheckableExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default CheckableDoc;
