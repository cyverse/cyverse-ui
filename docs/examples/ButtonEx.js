import React from 'react';
import { Button, Code } from '../../src';
import { WarningIcon } from '../../src/icons';
import { ButtonGroup } from '../../src/utils';


const Example = () => {
    return (
        <div style={{marginBottom: "20px"}}>
            <ButtonGroup>
                <Button
                    children="Default"
                    color="#EEEEEE"
                    tooltip="I'm a tooltip"
                />
                <Button
                    children="Primary"
                    color="#0971ab"
                />
                <Button
                    children="Danger"
                    color="#EA5050"
                >
                    <WarningIcon size={15} style={{position: "relative", top: "-2px"}} /> Danger
                </Button>
            </ButtonGroup>
        </div>
    )
};

export default React.createClass({
    render() {
        return (
            <div>
                { Example(this.onTouch) }
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{marginBottom: "20px"}}>
    <ButtonGroup>
        <Button
            children="Default"
            color="#EEEEEE"
            tooltip="I'm a tooltip"
        />
        <Button
            children="Primary"
            color="#0971ab"
        />
        <Button
            children="Danger"
            color="#EA5050"
        >
            <WarningIcon 
                size={15} 
                style={{position: "relative", top: "-2px"}} 
            /> 
            Danger
        </Button>
    </ButtonGroup>
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
