import React from 'react';
import theme from '../theme';
import { RadioButton, RadioButtonGroup } from 'troposphere-ui';
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
                    <RadioButtonGroup
                        color={ theme.color.primary }
                        name="heros"
                        defaultSelected="spiderman"
                    >
                        <RadioButton
                            value="batman"
                            label="Batman"
                            style={{ marginBottom: 8 }}
                            labelStyle={{ fontSize: 15 }}
                        />
                        <RadioButton
                            value="spiderman"
                            label="Spiderman"
                            style={{ marginBottom: 8 }}
                            labelStyle={{ fontSize: 15 }}
                        />
                        <RadioButton
                            value="green-lantern"
                            label="Green Lantern"
                            style={{ marginBottom: 8 }}
                            labelStyle={{ fontSize: 15 }}
                        />
                    </RadioButtonGroup>
                </Sheet>
                <Code children={
`<Sheet mb={ 4 }>
    <RadioButtonGroup
        color={ theme.color.primary }
        name="heros"
        defaultSelected="spiderman"
    >
        <RadioButton
            value="batman"
            label="Batman"
        />
        <RadioButton
            value="spiderman"
            label="Spiderman"
        />
    </RadioButtonGroup>
</Sheet>`
                    }
                />

            </section>
        )
    }
});
