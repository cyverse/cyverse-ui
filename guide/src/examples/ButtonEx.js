import React from 'react';
import { Tooltip, Button } from 'troposphere-ui';
import { Sheet, Code } from '../components';
import { WarningIcon } from '../icons';
import { ButtonGroup } from '../utils';
import theme from '../theme.js';

const Example = () => {
    return (
        <Sheet mb={ 4 }>
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
        </Sheet>
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
`<Sheet mb={ 4 }>
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
</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
