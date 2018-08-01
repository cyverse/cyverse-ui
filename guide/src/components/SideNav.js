import React from "react";
import { Divider } from "material-ui";
import { Element } from "cyverse-ui";
import SideBar from "./SideBar";
import GettingStartedLink from "./GettingStartedLink";
import ComponentLinkList from "./ComponentLinkList";
import ThemeLinkList from "./ThemeLinkList";
import IconLink from "./IconLink";

class SideNav extends React.Component {
    render() {
        return (
            <SideBar isOpen>
                <GettingStartedLink />
                <ThemeLinkList />
                <ComponentLinkList />
                <IconLink />
            </SideBar>
        );
    }
}

export default SideNav;
