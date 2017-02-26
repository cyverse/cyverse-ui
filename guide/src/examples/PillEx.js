import React from 'react';
import { Pill, Div, Title } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Code }  from '../components';
import { PersonIcon } from '../icons';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

const PillEx = React.createClass({
    render() {
        const { 
            muiTheme: { 
                palette: { 
                    primary1Color 
                } 
            } 
        } = this.props;
        return (
            <section>
                <Paper 
                    style={{
                        ...marg({ mb: 4 }),
                        ...pad({ p: 3 }),
                    }} 
                >
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
                        <Pill color={ primary1Color }>
                            Featured
                        </Pill>
                        <Pill 
                            color={ primary1Color }
                            icon = {  <PersonIcon/> } 
                        >
                            22
                        </Pill>
                    </Div>
                </Paper>
            <Code
                children={
`<Paper 
    style={{
        ...marg({ mb: 4 }),
        ...pad({ p: 3 }),
    }} 
>
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
        <Pill color={ primary1Color }>
            Featured
        </Pill>
        <Pill 
            color={ primary1Color }
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

export default muiThemeable()(PillEx);
