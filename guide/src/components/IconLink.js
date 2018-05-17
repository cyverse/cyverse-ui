import React from 'react';
import Scroll from 'react-scroll';
import {List, ListItem, ListItemText} from 'material-ui/List';

const scroller = Scroll.scroller;

class IconLink extends React.Component {
    scrollTo = (target) => {
        return () => {
            scroller.scrollTo(target, {
                duration: 1000,
                smooth: true,
            });
        }
    };

    render() {
        return (
            <ListItem
                button={true}
                onClick={ this.scrollTo("svg-icons") }
                >
                <ListItemText> SVG Icons </ListItemText>
            </ListItem>
        )
    }
}

export default IconLink;
