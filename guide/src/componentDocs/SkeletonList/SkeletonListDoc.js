import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import SkeletonListEx from './SkeletonListEx';
import SkeletonListExCode from '!raw-loader!./SkeletonListEx';

import { parse } from 'react-docgen';
import SkeletonList from '!raw-loader!cyverse-ui/SkeletonList';
const meta = parse(SkeletonList);

class SkeletonListDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `SkeletonList Example` } >
                    <SkeletonListEx/>
                    <CodeBlock text={ SkeletonListExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default SkeletonListDoc;
