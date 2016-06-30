import React from 'react';
import { Sheet, FlatButton, Code} from '../../src';
import { WarningIcon } from '../../src/icons';
import { ButtonGroup } from '../../src/utils';
import theme from '../theme.js';

const Example = () => {
    return (
        <Sheet mb={ 4 }>
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
</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
