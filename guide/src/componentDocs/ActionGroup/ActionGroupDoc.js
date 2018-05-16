import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import ActionGroupEx from './ActionGroupEx';
import ActionGroupExCode from '!raw-loader!./ActionGroupEx';
import { parse } from 'react-docgen';
import ActionGroup from '!raw-loader!cyverse-ui/ActionGroup';
const meta = parse(ActionGroup);

class ActionGroupDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ActionGroup Example' } >
                    <ActionGroupEx/>
                    <CodeBlock text={ ActionGroupExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ActionGroupDoc;
