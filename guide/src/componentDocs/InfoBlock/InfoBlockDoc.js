import React from 'react';
import { P } from 'cyverse-ui';
import { parse } from 'react-docgen';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';
import InfoBlock from '!raw-loader!cyverse-ui/InfoBlock';
import InfoBlockEx from './InfoBlockEx';
import InfoBlockExCode from '!raw-loader!./InfoBlockEx';

const meta = parse(InfoBlock);

class InfoBlockDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `InfoBlock Example` } >
                    <InfoBlockEx/>
                    <CodeBlock text={ InfoBlockExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default InfoBlockDoc;
