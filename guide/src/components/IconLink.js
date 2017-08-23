import React from 'react';
import Scroll from 'react-scroll';
import {List, ListItem} from 'material-ui/List';

const scroller = Scroll.scroller;

const IconLink = React.createClass({
    scrollTo(target) {
        return () => {
            scroller.scrollTo(target, {
                duration: 1000,
                smooth: true,
            });
        }
    },

    render() {
        return (
            <ListItem
                onTouchTap={ this.scrollTo("svg-icons") }
                primaryText="SVG Icons"
            />
        )
    },
});

export default IconLink;
