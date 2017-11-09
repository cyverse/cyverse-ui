import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import SubHeaderEx from './SubHeaderEx';
import SubHeaderExCode from '!raw-loader!./SubHeaderEx';

import { parse } from 'react-docgen';
import SubHeader from '!raw-loader!cyverse-ui/SubHeader';
const meta = parse(SubHeader);

const SubHeaderDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `SubHeader Example` } >
                    <SubHeaderEx/>
                    <CodeBlock text={ SubHeaderExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default SubHeaderDoc;
