import React, { PropTypes } from 'react';
import Dimensions from 'react-dimensions';
import { styles, marg } from './styles';
import MediaCard from './MediaCard';
import Avatar from './Avatar';
import Hr from './Hr';

const InstanceCard = React.createClass({

    summary() {
        return (
            <div style= { this.styles().summary}>
                { 
                    this.props.summaryInfo.map( item => {
                    return (
                        <div key={ item.label } style={ this.styles().summaryCell }>
                            { item.value }
                        </div>
                        )
                    })
                }
            </div>
        )
    },

    detail() { 
        const { title, launched } = this.props;
        let labelWidth = "125px";
        return (
            <div>
                <header style={{ 
                    ...marg({ mb: 5}), 
                    lineHeight: "1.3" }}
                >
                    <h1 style={ styles.t.headline }>
                        { title }
                    </h1>
                    <div style={ styles.t.subheading }>
                        { `Launched on ${launched}` }
                    </div>
                </header>

                <div 
                    id = { `${title}-stats` }
                    style = {{  ...styles.t.body1 }}
                >
                    {
                        this.props.detailInfo.map( item => {
                            return (
                                <div 
                                    key={ item.label } 
                                    style={ this.styles().detailRow}
                                >
                                    <span style={ this.styles().detailLabel }>
                                        { item.label }
                                    </span>
                                    <span>
                                        { item.value }
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    },

    avatar() {
        return (
            <Avatar
                name = { this.props.title }
                size = { 35 }
            />
        )
    },

    render() {
        return (
            <MediaCard { ...this.props }
                summary = { this.summary() }
                detail = { this.detail() }
                image = { this.avatar() }
            />
        );
    },

    styles() {
        let style = {};

        style.summary = {
            display: "flex", 
        };

        style.summaryCell = {
            paddingRight: "50px",
        };

        style.detailRow = { 
            paddingBottom: "10px", 
            display: "flex" 
        };

        style.detailLabel = {
            width: "250px", 
            ...styles.t.body2 
        }

        if (this.props.containerWidth <= 500) {
            style.summary.display = "block";
            style.summaryCell.paddingRight = "0";
            style.summaryCell.paddingBottom = "10px";
        }

        return style
    },
});

InstanceCard.propTypes = {
    className: PropTypes.string,
};

export default Dimensions({ containerStyle: { height: "auto"}})(InstanceCard);
