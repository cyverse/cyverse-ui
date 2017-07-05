import React from 'react';
import { ClearFix } from '../utils';
import { ShowMoreEllipsis, P } from 'cyverse-ui';
import { Code } from '../components';
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
