import React from 'react';
import v from '../../src/styles/variables';
import { Tooltip, Code, Button } from '../../src';
import { ClearFix } from '../../src/utils';
import { GithubIcon } from '../../src/icons';

export default React.createClass({
    Example() {
        return (
            <ClearFix style={{marginBottom: "20px"}}>
                <div style={{marginBottom: "20px"}}>
                    <Tooltip message="Default Direction">
                        <Button 
                            children="Hover over me"
                            color={ v.grey.xXLight }
                        />
                    </Tooltip>
                </div>
                <div style={{marginBottom: "20px"}}>
                    <Tooltip 
                        message="Direction Right"
                        direction="right"
                    >
                        <a href="#">Me Too</a>
                    </Tooltip>
                </div>
                <div style={{marginBottom: "20px"}}>
                    <Tooltip 
                        message="Direction Bottom"
                        direction="bottom"
                    >
                        <GithubIcon 
                            children="Hover over me"
                            size="40"
                        />
                    </Tooltip>
                </div>
                <div>
                    <Tooltip 
                        message="Direction Left"
                        direction="left"
                    >
                        <GithubIcon 
                            children="Hover over me"
                            size="40"
                        />
                    </Tooltip>
                </div>
            </ClearFix>
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
    <ClearFix>
        <div style={{float: "left", width: "33%"}}>
            <Tooltip message="I'm a Link">
                <a href="#">A Link</a>
            </Tooltip>
        </div>
        <div style={{float: "left", width: "33%"}}>
            <Tooltip message="I'm a Button">
                <Button 
                    children="Hover over me"
                    color={ v.grey.xXLight }
                />
            </Tooltip>
        </div>
        <div style={{float: "right"}}>
            <Tooltip 
                message="Direction Left"
                direction="left"
            >
                <GithubIcon 
                    children="Hover over me"
                    size="40"
                />
            </Tooltip>
        </div>
    </ClearFix>
</div>`
        /* Code string ends here */
    }/>
</div>
        )
    }
});
