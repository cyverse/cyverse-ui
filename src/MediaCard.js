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
        let shadow = styles.boxShadow.li 
        let detailWidth = "";
        let detailPadding = "0 50px 0 0";
        let titleMarg = "";
        let openStyle = {};
        let HeaderRule = null;

        if (this.props.isExpanded) {
            shadow = styles.boxShadow.lg
            detailWidth = "100%";
            detailPadding = "0";
            titleMarg = "20px";
            openStyle = { margin: "50px -20px" };
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
                style={{
                    ...openStyle,
                    position: "relative",
                    transition: "all ease .1s",
                    cursor: "pointer",
                    background: "white",
                    padding: "20px",
                    ...shadow,
                }}
                onClick={this.onExpand}
            >
                <Collapse isOpened={ true } springConfig={{stiffness: 320, damping: 30, precision: .001}}>
                    <div
                        style={{
                            padding: detailPadding,
                            display: "flex",
                            flexFlow: "row wrap"
                        }}
                    >
                        <div style={{
                                position: "relative",
                                marginRight: "10px", 
                                alignSelf: "flex-start", 
                            }}
                        >
                            <div style={{
                                    borderRadius: "50%", 
                                    overflow: "hidden",
                                }}
                            >
                                {this.props.image}
                            </div>
                        </div>

                        <div
                            style={{
                                flex: "0 300px",
                                marginBottom: `${titleMarg}`
                            }}
                        >
                            <div style={{
                                    ...styles.t.body2,
                                    color: this.props.color,
                                }}
                            >
                            {this.props.title}
                            </div>
                            <div style={{
                                    ...styles.t.caption,
                                }}
                            >
                                {this.props.subTitle}
                            </div>
                            <div>
                                {this.props.titleInfo}
                            </div>
                        </div>
                        <div 
                            style={{
                                flex: `1 0 ${detailWidth}`,
                                ...styles.t.body1,
                            }}
                        >
                            {HeaderRule}
                            {this.props.detail}
                        </div>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "10px",
                        }}
                    >
                        <VerticalMenu
                            menuItemList={this.props.contextualMenu}
                        />
                    </div>
                </Collapse>
            </div>
        )
    }
});
