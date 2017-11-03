import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import MediaCardGroupEx from './MediaCardGroupEx';
import MediaCardGroupExCode from '!raw-loader!./MediaCardGroupEx';

import { parse } from 'react-docgen';
import MediaCardGroup from '!raw-loader!cyverse-ui/MediaCardGroup';
const meta = parse(MediaCardGroup);

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
