import React from 'react';
import { Sheet, Code, Badge, } from '../../src';
import { PersonIcon } from '../../src/icons';

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
