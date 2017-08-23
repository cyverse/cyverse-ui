import React from 'react';
import { ShowMoreEllipsis, P } from 'cyverse-ui';
import Paper from 'material-ui/Paper';

export default React.createClass({
    render() {
        return (
            <Paper style={{ padding: "10px", marginBottom: "20px"}} >
                <P>
                    Bacon ipsum dolor amet capicola boudin tongue, cow pork loin venison t-bone kielbasa corned beef rump short loin tri-tip.
                    <br/>
                    <ShowMoreEllipsis/>
                </P>
            </Paper>
        )
    },
});
