import React, { PropType } from 'react';
import { InstanceCard, MediaCardGroup, FlatButton } from 'troposphere-ui';
import { ConsoleIcon, ReplayIcon, PauseIcon } from 'troposphere-ui/icons';
import { Code } from '../components';
import theme from '../theme.js';

export default React.createClass({
    onConsoleClick(e) {     
        e.stopPropagation();
        e.preventDefault();
        console.log('console was clicked');
    },

    render() {
        return (
            <div>
                <div style={{ marginBottom: "20px" }}>
                    <MediaCardGroup>
                        <InstanceCard
                            title = "Megatron"
                            launched = "Sep 2, 2016 (a day ago)"
                            summaryInfo = {[
                                { 
                                    label: "Status",
                                    value: "Active"
                                },
                                {
                                    label: "IP",
                                    value: "127.365.34.23"
                                },
                                { 
                                    label: "Size",
                                    value: "SM"
                                },
                                {
                                    label: "Provider",
                                    value: "Cloud and More"
                                },
                            ]}
                            detailInfo = {[
                                { 
                                    label: "Status",
                                    value: "Active"
                                },
                                {
                                    label: "IP",
                                    value: "127.365.34.23"
                                },
                                {
                                    label: "Alias",
                                    value: "aaaj3435kfdu55jhfh35"
                                },
                                { 
                                    label: "Size",
                                    value: "SM"
                                },
                                {
                                    label: "Provider",
                                    value: "Cloud and More"
                                },
                            ]}
                            contextualMenu = {[
                                {render: "red"}
                            ]}
                            quickLinks = {[
                                <ConsoleIcon
                                    onClick = { this.onConsoleClick }
                                    mr = { 3 }
                                    size = { 20 }
                                />,
                                <ReplayIcon
                                    onClick = { this.onConsoleClick }
                                    mr = { 3 }
                                    size = { 20 }
                                />,
                                <PauseIcon
                                    onClick = { this.onConsoleClick }
                                    size = { 20 }
                                />,
                            ]}
                        />
                        <InstanceCard
                            title = "ari-ubuntu 12.04 3.13.0-35-generic (trusty)"
                            launched = "Sep 2, 2016 (a day ago)"
                            summaryInfo = {[
                                { 
                                    label: "Status",
                                    value: "Active"
                                },
                                {
                                    label: "IP",
                                    value: "127.365.34.23"
                                },
                                { 
                                    label: "Size",
                                    value: "SM"
                                },
                                {
                                    label: "Provider",
                                    value: "Cloud and More"
                                },
                            ]}
                            detailInfo = {[
                                { 
                                    label: "Status",
                                    value: "Active"
                                },
                                {
                                    label: "IP",
                                    value: "127.365.34.23"
                                },
                                {
                                    label: "Alias",
                                    value: "aaaj3435kfdu55jhfh35"
                                },
                                { 
                                    label: "Size",
                                    value: "SM"
                                },
                                {
                                    label: "Provider",
                                    value: "Cloud and More"
                                },
                            ]}
                            contextualMenu = {[
                                {render: "red"}
                            ]}
                            quickLinks = {[
                                <ConsoleIcon
                                    onClick = { this.onConsoleClick }
                                    mr = { 3 }
                                    size = { 20 }
                                />,
                                <ReplayIcon
                                    onClick = { this.onConsoleClick }
                                    mr = { 3 }
                                    size = { 20 }
                                />,
                                <PauseIcon
                                    onClick = { this.onConsoleClick }
                                    size = { 20 }
                                />,
                            ]}
                        />
                        <InstanceCard
                            title = "Skeletor"
                            launched = "Sep 2, 2016 (a day ago)"
                            summaryInfo = {[
                                { 
                                    label: "Status",
                                    value: "Active"
                                },
                                {
                                    label: "IP",
                                    value: "127.365.34.23"
                                },
                                { 
                                    label: "Size",
                                    value: "SM"
                                },
                                {
                                    label: "Provider",
                                    value: "Cloud and More"
                                },
                            ]}
                            detailInfo = {[
                                { 
                                    label: "Status",
                                    value: "Active"
                                },
                                {
                                    label: "IP",
                                    value: "127.365.34.23"
                                },
                                {
                                    label: "Alias",
                                    value: "aaaj3435kfdu55jhfh35"
                                },
                                { 
                                    label: "Size",
                                    value: "SM"
                                },
                                {
                                    label: "Provider",
                                    value: "Cloud and More"
                                },
                            ]}
                            contextualMenu = {[
                                {render: "red"}
                            ]}
                            quickLinks = {[
                                <ConsoleIcon
                                    onClick = { this.onConsoleClick }
                                    mr = { 3 }
                                    size = { 20 }
                                />,
                                <ReplayIcon
                                    onClick = { this.onConsoleClick }
                                    mr = { 3 }
                                    size = { 20 }
                                />,
                                <PauseIcon
                                    onClick = { this.onConsoleClick }
                                    size = { 20 }
                                />,
                            ]}
                        />
                    </MediaCardGroup>
                </div>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{marginBottom: "20px"}}>
    <InstanceCard/>
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
