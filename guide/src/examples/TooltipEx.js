import React from 'react';
import v from 'troposphere-ui/styles/variables';
import { Tooltip, Button } from 'troposphere-ui';
import { Sheet, Code }  from '../components';
import { ClearFix } from '../utils';
import { GithubIcon } from '../icons';

export default React.createClass({
    Example() {
        return (
            <Sheet mb={ 4 }>
                <div style={{marginBottom: "20px"}}>
                    <Tooltip message="Default Direction">
                        <Button 
                            children="Hover over me"
                            color={ v.c.grey.xXLight }
                        />
                    </Tooltip>
                </div>
                <div style={{marginBottom: "20px"}}>
                    <Tooltip 
                        message="Direction Right"
                        direction="right"
                    >
                        <Button 
                            children="Direction Right"
                            color={ v.c.grey.xXLight }
                        />
                    </Tooltip>
                </div>
                <div style={{marginBottom: "20px"}}>
                    <Tooltip 
                        message="Direction Bottom"
                        direction="bottom"
                    >
                        <Button 
                            children="Direction Bottom"
                            color={ v.c.grey.xXLight }
                        />
                    </Tooltip>
                </div>
                <div>
                    <Tooltip 
                        message="Direction Left"
                        direction="left"
                    >
                        <Button 
                            children="Direction Left"
                            color={ v.c.grey.xXLight }
                        />
                    </Tooltip>
                </div>
            </Sheet>
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
`<Sheet mb={ 4 }>
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
            <Button 
                children="Hover over me"
                color={ v.grey.xXLight }
            />
    </div>
    <div style={{marginBottom: "20px"}}>
        <Tooltip 
            message="Direction Bottom"
            direction="bottom"
        >
            <Button 
                children="Hover over me"
                color={ v.grey.xXLight }
            />
        </Tooltip>
    </div>
    <div>
        <Tooltip 
            message="Direction Left"
            direction="left"
        >
            <Button 
                children="Hover over me"
                color={ v.grey.xXLight }
            />
        </Tooltip>
    </div>
</Sheet>`
        /* Code string ends here */
    }/>
</div>
        )
    }
});
