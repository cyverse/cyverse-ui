import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { SubHeader, Div, Title } from 'cyverse-ui';
import { Code }  from '../components';
import { PersonIcon } from '../icons';
import Paper from 'material-ui/Paper';


export default React.createClass({
    render() {
        return (
            <section>
                <Paper style={{ padding: "0 10px", marginBottom: "20px"}} >
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
            <Code
                children={
`<Paper style={{ padding: "0 10px", marginBottom: "20px"}} >
    <SubHeader 
        name="Title of View" 
        menuItems={[
            <MenuItem key="1" primaryText="Refresh" />,
            <MenuItem key="2" primaryText="Send feedback" />,
            <MenuItem key="3" primaryText="Settings" />,
            <MenuItem key="4" primaryText="Help" />,
        ]}

    />
</Paper>`
                }
            />
            </section>
        )
    }
});
