import React from 'react';
import { Pill, Div, Title } from 'cyverse-ui';
import { Code }  from '../components';
import { PersonIcon } from '../icons';
import Paper from 'material-ui/Paper';

export default React.createClass({
    render() {
        return (
            <section>
                <Paper style={{ padding: "10px", marginBottom: "20px"}} >
                    <Div mb = { 3 }>
                        <Title
                            h3
                            title-1
                            m={ 0 }
                        >
                            Default Color
                        </Title>
                        <Pill>
                            Featured
                        </Pill>
                        <Pill icon = {  <PersonIcon/> } >
                            22
                        </Pill>
                    </Div>
                    <Div>
                        <Title
                            h3
                            title-1
                            m={ 0 }
                        >
                            Custom Color
                        </Title>
                        <Pill color="royalblue">
                            Featured
                        </Pill>
                        <Pill 
                            color="royalblue"
                            icon = {  <PersonIcon/> } 
                        >
                            22
                        </Pill>
                    </Div>
                </Paper>
            <Code
                children={
`<Paper style={{ padding: "10px", marginBottom: "20px"}} >
    <Div mb = { 3 }>
        <Title h3 title-1 >
            Default Color
        </Title>
        <Pill>
            Featured
        </Pill>
        <Pill icon = {  <PersonIcon/> } >
            22
        </Pill>
    </Div>
    <Div>
        <Title h3 title-1 >
            Custom Color
        </Title>
        <Pill color="royalblue">
            Featured
        </Pill>
        <Pill 
            color="royalblue"
            icon = {  <PersonIcon/> } 
        >
            22
        </Pill>
    </Div>
</Paper>`
                }
            />
            </section>
        )
    }
});
