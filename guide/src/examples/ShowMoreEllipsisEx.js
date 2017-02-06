import React from 'react';
import { ClearFix } from '../utils';
import { ShowMoreEllipsis } from 'cyverse-ui';
import { Sheet, Code, P } from '../components';
import Paper from 'material-ui/Paper';

export default React.createClass({
    render() {
        return (
            <div>
                <Paper style={{ padding: "10px", marginBottom: "20px"}} >
                    <P>
                        Bacon ipsum dolor amet capicola boudin tongue, cow pork loin venison t-bone kielbasa corned beef rump short loin tri-tip.
                        <br/>
                        <ShowMoreEllipsis/>
                    </P>
                </Paper>

                <Code children={
/* This is a string for our code snippt. It is not indented because it messes up the formating in render 
 * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Paper style={{ padding: "10px", marginBottom: "20px"}} >
    <P>
        Bacon ipsum dolor amet capicola boudin tongue, cow pork loin venison t-bone kielbasa corned beef rump short loin tri-tip.
        <br/>
        <ShowMoreEllipsis/>
    </P>
</Sheet>`
                    /* Code string ends here */
                }/>
        </div>
            
        )
    },
});
