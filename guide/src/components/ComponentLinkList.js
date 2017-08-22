import React from 'react';
import Scroll from 'react-scroll';

import {List, ListItem} from 'material-ui/List';

import ComponentExList from '../ComponentExList';

const scroller = Scroll.scroller;

const ComponentLinkList = React.createClass({
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
        return ComponentExList.map( item => {
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
                primaryTogglesNestedList={true}
                nestedItems={ this.renderComponentLinks() }
            >
                Components
            </ListItem>
        )
    },
});

export default ComponentLinkList;
