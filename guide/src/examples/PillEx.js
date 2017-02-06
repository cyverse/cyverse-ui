import React from 'react';
import { Pill } from 'cyverse-ui';
import { Code }  from '../components';
import { PersonIcon } from '../icons';
import Paper from 'material-ui/Paper';

export default React.createClass({
    render() {
        return (
            <section>
                <Paper style={{ padding: "10px", marginBottom: "20px"}} >
                    <Pill mr={ 2 }>Featured</Pill>
                    <Pill>22</Pill> <PersonIcon/>
                </Paper>
            <Code
                children={
`<Paper style={{ padding: "10px", marginBottom: "20px"}} >
    <Pill mr={ 2 }>Featured</Pill>
    <Pill>22</Pill><PersonIcon/>
</Paper>`
                }
            />
            </section>
        )
    }
});
