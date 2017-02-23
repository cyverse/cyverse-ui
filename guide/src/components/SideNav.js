import React from 'react';
import Divider from 'material-ui/Divider';
import { Title } from 'cyverse-ui';
import SideBar from './SideBar';
import ComponentList from './ComponentList';


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
                <ComponentList/>
            </SideBar>
        )
    },
});

export default SideNav
