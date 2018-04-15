import React from 'react';
import { IconButton, RaisedButton, Paper } from 'material-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Div } from 'cyverse-ui';
import { LaunchIcon, LinkIcon } from 'cyverse-ui/icons';

class IconEx extends React.Component {
    render() {
        return (
            <Paper style={pad({p:3})}>
                <Div mb={ 4 }>
                    <Div mb={3}>
                        <LinkIcon/>
                    </Div>
                    <Div mb={3}>
                        <LinkIcon size={40}/>
                    </Div>
                    <Div>
                        <LinkIcon size={50}/>
                    </Div>
                </Div>
                <Div style={{ display: "flex", alignItems: "center" }}>
                    <RaisedButton
                        primary
                        style={marg({mr: 4})}
                        icon={ <LaunchIcon/> }
                        label="Launch"
                    />
                    <IconButton>
                        <LaunchIcon/>
                    </IconButton>
                </Div>
            </Paper>
        );
    }
}

export default IconEx
