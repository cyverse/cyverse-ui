import React from 'react';
import { GithubIcon } from '../src/icons';
import CyverseLogo from '../src/icons/mini_logo.svg';

export default React.createClass({
    render() {
        return (
                <header 
                    style={{
                        padding: "10px 20px", 
                        background: "#0971AB", 
                        position: "fixed", 
                        width: "100%", 
                        zIndex: "99999"
                    }} 
                >
                    <img width="150px" src={CyverseLogo} />
                    <div style={{float: "right"}}>
                        <a href="https://github.com/cyverse/troposphere-ui" >
                            <GithubIcon size="30" fill="white" />
                        </a>
                    </div>
                </header>
        );
    }
});
