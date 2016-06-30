import React from 'react';
import { FlatButton, Code} from '../../src';
import { WarningIcon } from '../../src/icons';
import { ButtonGroup } from '../../src/utils';
import theme from '../theme.js';

const Example = () => {
    return (
        <div style={{marginBottom: "20px"}}>
            <ButtonGroup>
                <FlatButton
                    id="default"
                    children="Default"
                />
                <FlatButton
                    id="primary"
                    children="Primary"
                    color={ theme.color.primary }
                    tooltipMessage="I have a Tooltip!"
                />
                <FlatButton
                    id="danger"
                    children="Danger"
                    color={ theme.color.danger }
                    icon={ <WarningIcon/> }
                />
                <FlatButton
                    id="disabled"
                    children="Im Disabled"
                    color={ theme.color.primary }
                    disabled
                />
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
            id="default"
            children="Default"
        />
        <Button
            id="primary"
            children="Primary"
            color={ theme.color.primary }
            tooltipMessage="I have a Tooltip!"
        />
        <Button
            id="danger"
            children="Danger"
            color={ theme.color.danger }
            icon={ <WarningIcon/> }
        />
        <Button
            id="disabled"
            children="Im Disabled"
            color={ theme.color.primary }
            disabled
        />
    </ButtonGroup>
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
