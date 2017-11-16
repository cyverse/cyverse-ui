import React from 'react';
import { IconButton, RaisedButton, Paper } from 'material-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Div } from 'cyverse-ui';
import { LaunchIcon, LinkIcon } from 'cyverse-ui/icons';

class IconEx extends React.Component {
    render() {
        return (
            <Paper style={pad({p:3})}>
                <Div mb={ 5 }>
                    <LinkIcon mr={ 4 }/>
                    <LinkIcon mr={ 4 } size={ 40 }/>
                    <LinkIcon size={ 50 }/>
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
