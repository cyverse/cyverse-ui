import React from 'react';
import { Paper, MenuItem } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Share from 'material-ui/svg-icons/social/share';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import { SubHeader, Div, Title } from 'cyverse-ui';

export default React.createClass({
    render() {
        return (
            <section>
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
