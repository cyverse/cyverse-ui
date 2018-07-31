import React from 'react';
import { Paper, MenuItem } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Share from '@material-ui/icons/Share';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import { SubHeader, Div, Title } from 'cyverse-ui';

export default class extends React.Component {
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
                            <MenuItem key="1" children="Refresh" />,
                            <MenuItem key="2" children="Send feedback" />,
                            <MenuItem key="3" children="Settings" />,
                            <MenuItem key="4" children="Help" />,
                        ]}

                    />
                </Paper>
            </section>
        )
    }
}
