import React from 'react';
import { Code, Badge } from '../../src';
import { PersonIcon } from '../../src/icons';

export default React.createClass({
    render() {
        return (
            <section>
            <div style={{marginBottom: "20px"}}>
                <Badge mr={ 2 }>Featured</Badge>
                <Badge>22</Badge><PersonIcon/>
            </div>
            <Code
                children={
`<div style={{marginBottom: "20px"}}>
    <Badge mr={ 2 } >Featured</Badge>
    <Badge>22</Badge><PersonIcon/>
</div>`
                }
            />
            </section>
        )
    }
});
