import React from 'react';
import { ClearFix } from '../../src/utils';
import { ShowMoreEllipsis, Code, P } from '../../src';

export default React.createClass({
    render() {
        return (
            <div>
                <div 
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    <P>
                        Bacon ipsum dolor amet capicola boudin tongue, cow pork loin venison t-bone kielbasa corned beef rump short loin tri-tip.
                        <br/>
                        <ShowMoreEllipsis/>
                    </P>
                </div>

                <Code children={
/* This is a string for our code snippt. It is not indented because it messes up the formating in render 
 * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div 
    style={{
        marginBottom: "20px",
    }}
>
    <p>
        Bacon ipsum dolor amet capicola boudin tongue, cow pork loin venison t-bone kielbasa corned beef rump short loin tri-tip.
        <br/>
        <ShowMoreEllipsis/>
    </p>
</div>`
                    /* Code string ends here */
                }/>
        </div>
            
        )
    },
});
