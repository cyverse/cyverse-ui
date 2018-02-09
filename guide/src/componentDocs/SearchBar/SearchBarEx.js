import React from 'react';
import { SearchBar } from 'cyverse-ui';

export default class extends React.Component {
    state = {
        query: ""
    };

    setQuery = (e) => {
        this.setState({
            query: e.target.value
        })
    };

    clearQuery = () => {
        this.setState({
            query: ""
        })
    };

    render() {
        return (
            <SearchBar
                value={ this.state.query }
                onChange={ this.setQuery }
                onClear={ this.clearQuery }
            />
        )
    }
}
