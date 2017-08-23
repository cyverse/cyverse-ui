import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/SkeletonList.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import SkeletonListEx from './SkeletonListEx';
import SkeletonListExCode from '!raw-loader!./SkeletonListEx';

const SkeletonListDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `SkeletonList Example` } >
                    <SkeletonListEx/>
                    <CodeBlock text={ SkeletonListExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default SkeletonListDoc;
