import React from 'react';
import { Divider } from 'material-ui';
import { Element } from 'cyverse-ui';
import SideBar from './SideBar';
import ComponentLinkList from './ComponentLinkList';
import ThemeLinkList from './ThemeLinkList';
import IconLink from './IconLink';

class SideNav extends React.Component {
    render() {
        return (
            <SideBar isOpen >
                <Element
                    root="h1"
                    typography="title"
                    whitespace={["mb2", "ps2"]}
                >
                    Table of Contents
                </Element>
                <Divider/>
                <ThemeLinkList/>
                <ComponentLinkList/>
                <IconLink/>
            </SideBar>
        )
    }
}

export default SideNav
