import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import ElementEx from './ElementEx';
import ElementExCode from '!raw-loader!./ElementEx';
import { parse } from 'react-docgen';
import Element from '!raw-loader!cyverse-ui/Element';
const meta = parse(Element);

class ElementDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'Element Example' } >
                    <ElementEx/>
                    <CodeBlock text={ ElementExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ElementDoc;
