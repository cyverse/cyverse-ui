import React from 'react';
import VerticalMenu from './VerticalMenu';
import Hr from './Hr';
import styles from './styles/styles';

export default React.createClass({
    onExpand() {
        this.props.onExpand();
        let scrollAmount = this.props.isExpanded ?
            -50 : 50;
        window.scrollBy(0,scrollAmount);
    },

    render() {
        let shadow = styles.boxShadow.li 
        let detailWidth = "";
        let detailPadding = "0 50px 0 0";
        let titleMarg = "";
        let openStyle = {};
        let openClass = "";
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
                    padding: "20px",
                    ...shadow,
                }}
                onClick={this.onExpand}
            >
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
                        <div style={{
                                position: "absolute",
                                top:"0",
                                right: "0",
                            }}
                        >
                            {this.props.imageBadge}
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
            </div>
        )
    }
})
