import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/ProgressAvatar.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import ProgressAvatarEx from './ProgressAvatarEx';
import ProgressAvatarExCode from '!raw-loader!./ProgressAvatarEx';

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
