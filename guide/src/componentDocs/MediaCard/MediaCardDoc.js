import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/MediaCard.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import MediaCardEx from './MediaCardEx';
import MediaCardExCode from '!raw-loader!./MediaCardEx';

const MediaCardDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MediaCard Example` } >
                    <MediaCardEx/>
                    <CodeBlock text={ MediaCardExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default MediaCardDoc;
