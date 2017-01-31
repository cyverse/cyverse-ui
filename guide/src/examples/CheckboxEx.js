import React from 'react';
import theme from '../theme';
import { Checkbox } from 'cyverse-ui';
import { Sheet, Code }  from '../components';

export default React.createClass({
    getInitialState() {
        return {
            isSimpleChecked: false,
            isDefaultChecked: true,
        }
    },

    onChecked() {
        
    },

    render() {
        return (
            <section>
                <Sheet mb={ 4 }>
                    <Checkbox 
                        color={ theme.color.primary }
                        label="Simple Checkbox"
		    />
                    <Checkbox 
                        color={ theme.color.primary }
                        label="Checked By Default"
                        defaultChecked={ true }
		    />
                </Sheet>
                <Code children={
`<Sheet mb={ 4 }>
    <Checkbox 
        color={ theme.color.primary }
        label="Simple Checkbox"
    />
    <Checkbox 
        color={ theme.color.primary }
        label="Checked By Default"
        defaultChecked={ true }
    />
</Sheet>`
                    }
                />

            </section>
        )
    }
});
