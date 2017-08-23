import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/MediaCardGroup.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import MediaCardGroupEx from './MediaCardGroupEx';
import MediaCardGroupExCode from '!raw-loader!./MediaCardGroupEx';

const MediaCardGroupDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MediaCard Example` } >
                    <MediaCardGroupEx/>
                    <CodeBlock text={ MediaCardGroupExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default MediaCardGroupDoc;
