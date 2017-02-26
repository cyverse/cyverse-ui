import React from 'react';
import Divider from 'material-ui/Divider';
import { Title } from 'cyverse-ui';
import SideBar from './SideBar';
import ComponentLinkList from './ComponentLinkList';
import ThemeLinkList from './ThemeLinkList';


const SideNav = React.createClass({
    render() {
        return (
            <SideBar isOpen >
                <Title 
                    h1
                    title
                    mb={ 2 }
                    ps={ 3 }
                >
                    Table of Contents
                </Title>
                <Divider/>
                <ThemeLinkList/>
                <ComponentLinkList/>
            </SideBar>
        )
    },
});

export default SideNav
