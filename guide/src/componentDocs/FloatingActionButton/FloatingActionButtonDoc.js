import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import FloatingActionButtonEx from './FloatingActionButtonEx';
import FloatingActionButtonExCode from '!raw-loader!./FloatingActionButtonEx';

import FloatingActionButton from '!raw-loader!cyverse-ui/FloatingActionButton';
import { parse } from 'react-docgen';
const meta = parse(FloatingActionButton);

class FloatingActionButtonDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `FloatingActionButton Example` } >
                    <FloatingActionButtonEx/>
                    <CodeBlock text={ FloatingActionButtonExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default FloatingActionButtonDoc;
