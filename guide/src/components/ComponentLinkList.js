import React from "react";
import R from "ramda";
import Scroll from "react-scroll";

import { List, ListItem } from "material-ui/List";

import * as componentDocs from "../componentDocs";

const scroller = Scroll.scroller;
const scrollTo = target => {
    return () => {
        scroller.scrollTo(target, {
            duration: 1000,
            smooth: true
        });
    };
};

class ComponentLinkList extends React.Component {
    renderComponentLinks = () => {
        return R.toPairs(componentDocs).map(item => {
            // This is kind of lame because the file ends with "doc"
            // Probably a better way to get the name off the component
            const name = item[0].slice(0, -3);
            const target = name
                .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
                .replace(
                    /([A-Z])/g,
                    ([letter]) => `-${letter.toLowerCase()}`
                );
            return (
            <ListItem
                key={ name }
                onTouchTap={ scrollTo(target) }
                primaryText= { name }
            />
            )
        })
    };

    render() {
        return (
            <ListItem
                primaryTogglesNestedList={true}
                nestedItems={this.renderComponentLinks()}
            >
                Components
            </ListItem>
        );
    }
}

export default ComponentLinkList;
