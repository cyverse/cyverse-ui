import React from 'react';
import { GithubIcon } from '../icons';
import { pad } from 'cyverse-ui/styles';
import CyverseLogo from '../icons/mini_logo.svg';

export default React.createClass({
    render() {
        return (
                <header
                    style={{
                        ...pad({ p: 3 }),
                        background: "#0971AB",
                        position: "fixed",
                        width: "100%",
                        zIndex: "700",
                        ...this.props.style
                    }}
                >
                    <img width="150px" src={CyverseLogo} />
                    <div style={{float: "right"}}>
                        <a href="https://github.com/cyverse/cyverse-ui" >
                            <GithubIcon size="30" fill="white" />
                        </a>
                    </div>
                </header>
        );
    }
});
