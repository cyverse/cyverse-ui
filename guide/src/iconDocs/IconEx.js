import React from 'react';
import { IconButton, RaisedButton, Paper } from 'material-ui';
import { Element } from 'cyverse-ui';
import { styles } from 'cyverse-ui/styles';
import { LaunchIcon, LinkIcon } from 'cyverse-ui/icons';

class IconEx extends React.Component {
    render() {
        return (
            <Paper>
                <Element whitespace="p3">
                    <Element whitespace="mb4">
                        <Element whitespace="mb3">
                            <LinkIcon/>
                        </Element>
                        <Element whitespace="mb3">
                            <LinkIcon size={40}/>
                        </Element>
                        <Element>
                            <LinkIcon size={50}/>
                        </Element>
                    </Element>
                    <Element style={{ display: "flex", alignItems: "center" }}>
                        <RaisedButton
                            primary
                            style={styles.whitespace.mr3}
                            icon={ <LaunchIcon/> }
                            label="Launch"
                        />
                        <IconButton>
                            <LaunchIcon/>
                        </IconButton>
                    </Element>
                </Element>
            </Paper>
        );
    }
}

export default IconEx
