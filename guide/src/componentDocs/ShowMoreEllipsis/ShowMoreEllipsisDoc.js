import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/ShowMoreEllipsis.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import ShowMoreEllipsisEx from './ShowMoreEllipsisEx';
import ShowMoreEllipsisExCode from '!raw-loader!./ShowMoreEllipsisEx';

const ShowMoreEllipsisDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ShowMoreEllipsis Example` } >
                    <ShowMoreEllipsisEx/>
                    <CodeBlock text={ ShowMoreEllipsisExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default ShowMoreEllipsisDoc;
