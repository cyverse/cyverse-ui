import React from 'react';
import Scroll from 'react-scroll';
import VerticalMenu from './VerticalMenu';
import Hr from './Hr';
import Collapse from 'react-collapse';
import styles from './styles/styles';

const scroll = Scroll.animateScroll;

export default React.createClass({
    onExpand() {
        this.props.onExpand();
        let scrollAmount = this.props.isExpanded ?
            -30 : 30;
        scroll.scrollMore(scrollAmount, {
            duration: 95,
        });
    },

    render() {
        let HeaderRule = null;

        if (this.props.isExpanded) {
            HeaderRule = (<Hr style={{margin: "0 -20px 20px"}}/>);
        }

        let headerIcons = (icon) => {
            return (
                <div style={{float:"right", marginLeft: "5px"}}>
                    {icon}
                </div>
            )
        };

        return (
            <div
                style={this.styles().card}
                onClick={this.onExpand}
            >
                <Collapse isOpened={ true } springConfig={{stiffness: 320, damping: 30, precision: .001}}>
                    <div style={ this.styles().wrapper} >

                        <div style={ this.styles().image }>
                            {this.props.image}
                        </div>

                        <div style={ this.styles().header}>

                            <div style={ this.styles().title }>
                                {this.props.title}
                            </div>

                            <div style={ this.styles().subTitle }>
                                {this.props.subTitle}
                            </div>

                            <div>
                                {this.props.titleInfo}
                            </div>

                        </div>

                        <div style={ this.styles().detail }>
                            {HeaderRule}
                            {this.props.detail}
                        </div>

                    </div>

                    <div style={ this.styles().menu }>

                        <VerticalMenu
                            menuItemList={this.props.contextualMenu}
                        />

                    </div>
                </Collapse>
            </div>
        )
    },

    styles() {
        let shadow = styles.boxShadow.li 
        let detailWidth = "";
        let detailPadding = "0 50px 0 0";
        let titleMarg = "";
        let openStyle = {};

        if (this.props.isExpanded) {
            shadow = styles.boxShadow.lg
            detailWidth = "100%";
            detailPadding = "0px";
            titleMarg = "20px";
            openStyle = { margin: "50px -20px" };
        }

        return {
            card: {
                ...openStyle,
                position: "relative",
                transition: "all ease .1s",
                cursor: "pointer",
                background: "white",
                padding: "20px",
                ...shadow,
            },

            wrapper: {
                padding: detailPadding,
                display: "flex",
                flexFlow: "row wrap"
            },

            header: {
                flex: "0 200px",
                marginBottom: `${titleMarg}`,
            },

            image: {
                position: "relative",
                marginRight: "10px", 
                alignSelf: "flex-start", 
                borderRadius: "50%", 
                overflow: "hidden",
            },

            title: {
                ...styles.t.body2,
                color: this.props.color,
            },

            subTitle: {
                 ...styles.t.caption,
            },

            detail: {
                flex: `1 0 ${detailWidth}`,
                ...styles.t.body1,
            }, 

            menu: {
                position: "absolute",
                right: "10px",
                top: "10px",
            },
        }


    }
});
