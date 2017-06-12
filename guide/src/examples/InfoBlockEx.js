import React from 'react';
import { InfoBlock } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Code }  from '../components';
import Paper from 'material-ui/Paper';

const InfoBlockEx = React.createClass({
    render() {
        return (
            <Paper
                style={{
                    ...marg({ mb: 4 }),
                    ...pad({ p: 3 }),
                }}
            >
                <InfoBlock
                    mb={ 4 }
                    text="This is a default InfoBlock that uses an info icon. Here we would explain basic information for user onbording"
                />
                <InfoBlock
                    warning
                    text="This is a warning InfoBlock that uses a warning icon. Here we might warn the user of an action's implications."
                />
            </Paper>
        )
    }
});

export default InfoBlockEx;
