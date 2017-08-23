import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/InfoBlock.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import InfoBlockEx from './InfoBlockEx';
import InfoBlockExCode from '!raw-loader!./InfoBlockEx';

const InfoBlockDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `InfoBlock Example` } >
                    <InfoBlockEx/>
                    <CodeBlock text={ InfoBlockExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default InfoBlockDoc;
