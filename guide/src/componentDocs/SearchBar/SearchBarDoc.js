import React from 'react';
import { P } from 'cyverse-ui';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import SearchBarEx from './SearchBarEx';
import SearchBarExCode from '!raw-loader!./SearchBarEx';

import { parse } from 'react-docgen';
import SearchBar from '!raw-loader!cyverse-ui/SearchBar';
const meta = parse(SearchBar);

const SearchBarDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `SearchBar Example` } >
                    <SearchBarEx/>
                    <CodeBlock text={ SearchBarExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default SearchBarDoc;
