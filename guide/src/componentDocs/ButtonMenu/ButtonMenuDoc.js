import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/ButtonMenu.json';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import ButtonMenuEx from './ButtonMenuEx';
import ButtonMenuExCode from '!raw-loader!./ButtonMenuEx';

const ButtonMenuDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ButtonMenu Example` } >
                    <ButtonMenuEx/>
                    <CodeBlock text={ ButtonMenuExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default ButtonMenuDoc;
