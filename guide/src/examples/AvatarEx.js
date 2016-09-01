import React from 'react';
import { marg } from 'troposphere-ui/lib/styles';
import { Avatar } from 'troposphere-ui';
import { Code, Sheet }  from '../components';

export default React.createClass({
    render() {
        return (
            <div>
                <Sheet mb={ 4 }>
                    <div 
                        style={{
                            fontSize: "18px",
                            ...marg({ mb: 3 }),
                        }}
                    >
                        <Avatar
                            name="Megatron"
                            size={ 30 }
                            mr={ 3 }
                        />
                        Megatron
                    </div>
                    <div 
                        style={{
                            fontSize: "22px",
                            ...marg({ mb: 3 }),
                        }}
                    >
                        <Avatar
                            name="Cobra Commander"
                            size={ 40 }
                            mr={ 3 }
                        />
                        Cobra Commander
                    </div>
                    <div 
                        style={{ 
                            fontSize: "28px",
                        }}
                    >
                        <Avatar
                            name="Skeletor"
                            size={ 50 }
                            mr={ 3 }
                        />
                        Skelletor
                    </div>
                </Sheet>

                <Code children={
/* This is a string for our code snippt. It is not indented because it messes up the formating in render
 * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
    <div 
        style={{
            fontSize: "18px",
            ...marg({ mb: 3 }),
        }}
    >
        <Avatar
            name="Megatron"
            size={ 30 }
            mr={ 3 }
        />
        Megatron
    </div>
    <div 
        style={{
            fontSize: "22px",
            ...marg({ mb: 3 }),
        }}
    >
        <Avatar
            name="Cobra Commander"
            size={ 40 }
            mr={ 3 }
        />
        Cobra Commander
    </div>
    <div 
        style={{ 
            fontSize: "28px",
        }}
    >
        <Avatar
            name="Skeletor"
            size={ 50 }
            mr={ 3 }
        />
        Skelletor
    </div>
</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
})
