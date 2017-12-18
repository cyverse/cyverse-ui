import React from 'react';
import { P } from 'cyverse-ui';
import { Figure, ComponentDoc, CodeBlock } from '../../components';

import ListCardDetailEx from './ListCardDetailEx';
import ListCardDetailExCode from '!raw-loader!./ListCardDetailEx';
import { parse } from 'react-docgen';
import ListCardDetail from '!raw-loader!cyverse-ui/ListCardDetail';
const meta = parse(ListCardDetail);

class ListCardDetailDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ 'ListCardDetail Example' } >
                    <ListCardDetailEx/>
                    <CodeBlock text={ ListCardDetailExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
}

export default ListCardDetailDoc;
