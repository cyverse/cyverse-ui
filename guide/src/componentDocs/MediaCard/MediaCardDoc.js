import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import MediaCardEx from './MediaCardEx';
import MediaCardExCode from '!raw-loader!./MediaCardEx';

import { parse } from 'react-docgen';
import MediaCard from '!raw-loader!cyverse-ui/MediaCard';
const meta = parse(MediaCard);

class MediaCardDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MediaCard Example` } >
                    <MediaCardEx/>
                    <CodeBlock text={ MediaCardExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default MediaCardDoc;
