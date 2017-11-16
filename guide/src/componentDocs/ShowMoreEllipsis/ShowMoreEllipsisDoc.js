import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import ShowMoreEllipsisEx from './ShowMoreEllipsisEx';
import ShowMoreEllipsisExCode from '!raw-loader!./ShowMoreEllipsisEx';

import { parse } from 'react-docgen';
import ShowMoreEllipsis from '!raw-loader!cyverse-ui/ShowMoreEllipsis';
const meta = parse(ShowMoreEllipsis);

class ShowMoreEllipsisDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `ShowMoreEllipsis Example` } >
                    <ShowMoreEllipsisEx/>
                    <CodeBlock text={ ShowMoreEllipsisExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ShowMoreEllipsisDoc;
