import React from 'react';
import Scroll from 'react-scroll';

import {List, ListItem} from 'material-ui/List';

import Examples from '../ExampleList';

const scroller = Scroll.scroller;

const ComponentList = React.createClass({
    scrollTo(name) {
        return () => {
            let target = name.replace(/\s+/g, '-');
            scroller.scrollTo(target, {
                duration: 1000,
                smooth: true,
            });
        }
    },

    renderComponentLinks() {
        return Examples.map( item => {
            return ( 
            <ListItem
                key={ item.name }
                onTouchTap={ this.scrollTo(item.name) }
                primaryText= { item.name }
            />
            )
        })
    },

    render() {
        return (
            <ListItem
                initiallyOpen
                primaryTogglesNestedList={true}
                nestedItems={ this.renderComponentLinks() }
            >
                Components
            </ListItem>
        )
    },
});

export default ComponentList;
