import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Share from 'material-ui/svg-icons/social/share';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import { SubHeader, Div, Title } from 'cyverse-ui';
import { Code }  from '../components';
import { DeleteIcon, EditIcon, ConsoleIcon } from 'cyverse-ui/icons';
import Paper from 'material-ui/Paper';

export default React.createClass({
    render() {
        return (
            <section>
                <Paper style={{ padding: "5px", marginBottom: "20px"}} >
                    <SubHeader 
                        name="Title of View"
                        menuItems={[
                            <MenuItem key="1" primaryText="Refresh" />,
                            <MenuItem key="2" primaryText="Send feedback" />,
                            <MenuItem key="3" primaryText="Settings" />,
                            <MenuItem key="4" primaryText="Help" />,
                        ]}

                    />
                </Paper>
                <Paper style={{ padding: "5px", marginBottom: "20px"}} >
                    <SubHeader
                        name="With QuickActions"
                        quickActions={[
                            <IconButton key="1">
                                <Share/>
                            </IconButton>,
                            <IconButton key="1">
                                <Edit size={ 20 }/>
                            </IconButton>,
                            <IconButton key="1">
                                <Delete size={ 20 }/>
                            </IconButton>,

                        ]}
                        menuItems={[
                            <MenuItem key="1" primaryText="Refresh" />,
                            <MenuItem key="2" primaryText="Send feedback" />,
                            <MenuItem key="3" primaryText="Settings" />,
                            <MenuItem key="4" primaryText="Help" />,
                        ]}

                    />
                </Paper>
            </section>
        )
    }
});
