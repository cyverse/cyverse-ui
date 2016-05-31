import React from 'react';
import toJsx from 'react-element-to-jsx-string';
import { Button, Code } from '../../src';

const Example = () => {
    return (
        <div>
           <Button
            color="red"
            thing="one"
            thing2="is you"
            apple="yum"
           />
           <Button/>
           <Button/>
        </div>
    )
};

export default React.createClass({

    render() {
        return (
            <div>
                <Example/>
                <Code 
                    children={toJsx(Example())}
                />
            </div>
        )
    }
});
