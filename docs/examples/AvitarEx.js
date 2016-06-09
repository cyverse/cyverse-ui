import React from 'react';
import { Avitar, Code } from '../../src';

export default React.createClass({
    render() {
        return (
            <div>
                <div style={{fontSize: "18px"}}>
                    <Avitar
                        name="Megatron"
                        size={ 30 }
                        color="#a9cc66"
                        style={{ margin: "10px" }}
                    />
                    Megatron
                </div>
                <div style={{fontSize: "22px"}}>
                    <Avitar
                        name="Cobra Commander"
                        size={ 40 }
                        color="#87a8f0"
                        style={{ margin: "10px" }}
                    />
                    Cobra Commander
                </div>
                <div style={{fontSize: "28px", marginBottom: "20px"}}>
                    <Avitar
                        name="Skeletor"
                        size={ 50 }
                        color="#29eded"
                        style={{ margin: "10px" }}
                    />
                    Skelletor
                </div>
                    
                <Code children={
/* This is a string for our code snippt. It is not indented because it messes up the formating in render 
 * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{fontSize: "18px"}}>
    <Avitar
        name="Megatron"
        size={ 30 }
        color="#29eded"
        style={{ margin: "10px" }}
    />
    Megatron
</div>
<div style={{fontSize: "22px"}}>
    <Avitar
        name="Cobra Commander"
        size={ 40 }
        color="#97f811"
        style={{ margin: "10px" }}
    />
    Cobra Commander
</div>
<div style={{fontSize: "28px"}}>
    <Avitar
        name="Skeletor"
        size={ 50 }
        color="#87a8f0"
        style={{ margin: "10px" }}
    />
    Skelletor
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
})
