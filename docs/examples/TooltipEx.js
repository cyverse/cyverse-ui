
import React from 'react';
import v from '../../src/styles/variables';
import { Tooltip, Code, Button } from '../../src';


export default React.createClass({
    Example() {
        return (
            <div style={{marginBottom: "20px"}}>
                <Tooltip message="Tooltips are Awesome!">
                    <Button 
                        children="Hover over me"
                        color={ v.grey.xXLight }
                    />
                </Tooltip>
            </div>
        )
    },

    render() {
        return (
            <div>
                { this.Example() }
                <Code children={
                    /* This is a string for our code snippt. 
                     * It is not indented because it messes up the formating in render.     
                     * Initially used `toJSX(Example())` which was an awesome solution but it renders the Radium wrapper instead of Button :( */
`<div style={{marginBottom: "20px"}}>
    <Tooltip message="Tooltips are Awesome!">
        <Button 
            children="Hover over me"
            color={ v.grey.xXLight }
        />
    </Tooltip>
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
