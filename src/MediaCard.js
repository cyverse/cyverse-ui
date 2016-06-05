import React from 'react';
import VerticalMenu from 'components/common/ui/VerticalMenu.react';

export default React.createClass({
    onExpand() {
        this.props.onExpand();
        let scrollAmount = this.props.isExpanded ?
            -50 : 50;
        window.scrollBy(0,scrollAmount);
    },

    render() {
        let detailWidth = "";
        let detailPadding = "0 50px 0 0";
        let titleMarg = "";
        let openStyle = {};
        let openClass = "";
        let HeaderRule = null;

        if (this.props.isExpanded) {
            detailWidth = "100%";
            detailPadding = "0";
            titleMarg = "20px";
            openStyle = { margin: "50px -20px" };
            openClass = "CardList--expanded";
            HeaderRule = (<hr style={{margin: "0 -20px 20px"}}/>);
        }

        let headerIcons = (icon) => {
            return (
                <div style={{float:"right", marginLeft: "5px"}}>
                    {icon}
                </div>
            )
        };

        let header = this.props.header ?
            (
                <div className="clearfix"
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        left: "0",
                        padding: "3px"
                    }}
                >
                    {this.props.header.map(headerIcons)}
                </div>
            ) : null;

        return (
            <div className={`CardList ${openClass}`}
                style={{
                    ...openStyle,
                    position: "relative",
                    transition: "all ease .1s",
                    cursor: "pointer",
                }}
                onClick={this.onExpand}
            >
                {header}
                <div className="t-wordBreaker"
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
                        {this.props.title}
                        <span className="t-caption">
                            {this.props.subTitle}
                        </span>
                        <div>
                            {this.props.titleInfo}
                        </div>
                    </div>
                    <div 
                        style={{
                            flex: `1 0 ${detailWidth}`
                        }}
                    >
                        {HeaderRule}
                        {this.props.detail}
                    </div>
                </div>
                    <div
                        style={{
                            position: "absolute",
                            right: "20px",
                            top: "20px",
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
