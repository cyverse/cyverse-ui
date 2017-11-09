import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import ProgressAvatarEx from './ProgressAvatarEx';
import ProgressAvatarExCode from '!raw-loader!./ProgressAvatarEx';

import { parse } from 'react-docgen';
import ProgressAvatar from '!raw-loader!cyverse-ui/ProgressAvatar';
const meta = parse(ProgressAvatar);

const ProgressAvatarDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ProgressAvatar Example` } >
                    <ProgressAvatarEx/>
                    <CodeBlock text={ ProgressAvatarExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default ProgressAvatarDoc;
