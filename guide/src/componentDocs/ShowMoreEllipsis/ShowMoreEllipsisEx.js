import React from 'react';
import { ShowMoreEllipsis, Paper, P } from 'cyverse-ui';

export default class extends React.Component {
    render() {
        return (
            <Paper whitespace="p3" >
                <P>
                    Bacon ipsum dolor amet capicola boudin tongue, cow pork loin venison t-bone kielbasa corned beef rump short loin tri-tip.
                    <ShowMoreEllipsis/>
                </P>
            </Paper>
        )
    }
}
