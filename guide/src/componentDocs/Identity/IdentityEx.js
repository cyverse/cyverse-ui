import React from 'react';
import { withStyles} from "material-ui/styles";
import { Identity, Paper } from 'cyverse-ui';
import * as colors from "material-ui/colors";
import { Avatar } from 'material-ui';

const styles = theme => ({
    lgAvatar: {
        backgroundColor: "tomato",
        width: "62px",
        height: "62px",
        fontSize: "32px",
        color: "rgba(256,256,256, .8)"
    },
    smAvatar: {
        backgroundColor: "royalblue",
        color: "rgba(256,256,256, .8)"
    }
})

const IdentityEx = ({ classes }) => (
    <Paper whitespace="p2">
        <Identity
            lg
            whitespace="mb3"
            avatar={
                <Avatar
                    className={classes.lgAvatar}
                    children="L"
                />
            }
            primaryText="Large Identity"
            secondaryText="Ceratopsid Herbivorous"
        />
        <Identity
            avatar={
                <Avatar
                    className={classes.smAvatar}
                    children="S"
                    color="rgba(255,255,255,.6)"
                    backgroundColor="gold"
                />
            }
            primaryText="Small Identity"
            secondaryText="It is so cute it hurts"
        />
    </Paper>
)

export default withStyles(styles)(IdentityEx)
