import React from 'react';
import { Badge } from 'troposphere-ui';
import { Sheet, Code }  from '../components';
import { PersonIcon } from '../icons';

export default React.createClass({
    render() {
        return (
            <section>
                <Sheet mb={ 5 }>
                    <Badge mr={ 2 }>Featured</Badge>
                    <Badge>22</Badge><PersonIcon/>
                </Sheet>
            <Code
                children={
`<Sheet mb={ 5 }>
    <Badge mr={ 2 }>Featured</Badge>
    <Badge>22</Badge><PersonIcon/>
</Sheet>`
                }
            />
            </section>
        )
    }
});
