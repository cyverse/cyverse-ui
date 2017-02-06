import React, { PropType } from 'react';
import { InstanceCard, MediaCardGroup } from 'cyverse-ui';
import { ConsoleIcon, ReplayIcon, PauseIcon, PlayIcon } from 'cyverse-ui/icons';
import { Code } from '../components';
import theme from '../theme.js';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
    getInitialState() {
        return {
            progress: 100,
            batchMode: true,
            checked: [],
        }
    },

    data: [
        {
            title: "Ubuntu 14.04.2 XFCE Base",
            launched : "Sep 2, 2016 (a day ago)",
            status: "Active",
            ip: "127.365.34.23",
            size: "SM",
            provider: "Cloud and More",
            alias: "fjjjaj3435kfdu55jhfh35",
        },
        {
            title: "CyVerse CentOS 6.8 GUI Base",
            launched : "Sep 2, 2016 (a day ago)",
            status: "Active",
            ip: "127.365.34.23",
            size: "SM",
            provider: "Cloud and More",
            alias: "aaaj34fgfgkfdu55jfggffh35",
        },
        {
            title: "Ubuntu 14.04 with Docker 1.7.x",
            launched : "Sep 2, 2016 (a day ago)",
            status: "Active",
            ip: "127.365.34.23",
            size: "SM",
            provider: "Cloud and More",
            alias: "aafgfg3435kfdu55jhfh35",
        },
        {
            title: "functional genomics_v1.0",
            launched : "Sep 2, 2016 (a day ago)",
            status: "Active",
            ip: "127.365.34.23",
            size: "SM",
            provider: "Cloud and More",
            alias: "fgfgaj3435kfdu55jhfh35",
        },
    ],

    startProccess() {

        this.setState({
            progress: 0
        });

        window.setTimeout(() => {
            this.setState({
                progress: 45
            });
            window.setTimeout(() => {
                this.setState({
                    progress: 70
                });
                window.setTimeout(() => {
                    this.setState({
                        progress: 90
                    });
                    window.setTimeout(() => {
                        this.setState({
                            progress: 100
                        });
                    }, 2500);
                }, 1000);
            }, 2000);
        }, 1200);
    },

    onConsoleClick(e) {     
        e.stopPropagation();
        e.preventDefault();
        console.log('console was clicked');
    },

    onCheck( curr ) {
        let list = this.state.checked;
        let checked;
        if ( list.indexOf( curr ) !== -1 ) {
            checked = list.filter( item => curr !== item);
        } else {
            checked = [
                ...list,
                curr
            ];
        };

        this.setState({ checked });
    },

    renderCard(item) {
        let summary = [
            { 
                label: "Status",
                value: item.status
            },
            {
                label: "IP",
                value: item.ip
            },
            { 
                label: "Size",
                value: item.size
            },
            {
                label: "Provider",
                value: item.provider
            },
        ];

        let detail = [
            ...summary,
            {
                label: "Alias",
                value: item.alias,
            }
        ];

        return (
            <InstanceCard
                key = { `${item.alias}-card` }
                title = { item.title }
                primaryColor = { theme.color.primary }
                launched = "Sep 2, 2016 (a day ago)"
                summaryInfo = { summary }
                detailInfo = { detail }
                percent = { this.state.progress }
                successColor = { theme.color.success }
                batchMode = { this.state.checked.length > 0 }
                checked = { this.state.checked.indexOf(item) !== -1 }
                onBatchClick = { this.onCheck.bind( this, item ) }
                onChangeTitle = { value => { console.log(value) } }
                menuItems = {[
                    <MenuItem key="1" primaryText="Refresh" />,
                    <MenuItem key="2" primaryText="Send feedback" />,
                    <MenuItem key="3" primaryText="Settings" />,
                    <MenuItem key="4" pprimaryText="Help" />,
                    <MenuItem key="5" pprimaryText="Sign out" />,
                ]}
                quickLinks = {[
                    <ConsoleIcon
                        key = "link1"
                        onClick = { this.onConsoleClick }
                        size = { 20 }
                        mr = { 3 }
                    />,
                    <ReplayIcon
                        key = "link2"
                        onClick = { this.onConsoleClick }
                        size = { 20 }
                        mr = { 3 }
                    />,
                    <PauseIcon
                        key = "link3"
                        onClick = { this.onConsoleClick }
                        size = { 20 }
                    />,
                ]}
            />

        )
    },

    render() {
        return (
            <div>
                <div style={{ marginBottom: "20px" }}>

                    <MediaCardGroup>
                        { this.data.map( this.renderCard ) }
                    </MediaCardGroup>

                </div>

                <div style={{marginBottom: "20px"}}>

                        <FlatButton
                            label="Play"
                            onTouchTap={ this.startProccess }
                            icon={ <PlayIcon/> }
                        />

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
