import React from 'react';
import { Pill, Div, Title } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import PersonIcon from 'material-ui/svg-icons/social/person';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

class PillEx extends React.Component {
    render() {
        const {
            muiTheme: {
                palette: {
                    primary1Color
                }
            }
        } = this.props;
        return (
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
        )
    }
}

export default muiThemeable()(PillEx);
