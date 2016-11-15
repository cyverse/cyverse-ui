import React, { PropTypes } from 'react';
import { marg, pad } from './styles';
import VerticalMenu from './VerticalMenu';
import Div from './Div';
import ButtonGroup from './utils/ButtonGroup';
import LeftArrowIcon from './icons/LeftArrowIcon';

const SubHeader = React.createClass({

    renderOptionGroup() {
        let { quickOptions, menuItems } = this.props;
        let style = this.style();

        let renderQuickOptions = (option) => {
            return (
                <Div mr={ 4 }>
                    { option }
                </Div>
            )
        };

        if ( quickOptions || menuItems ) {
            return (
                <div style={ style.actionGroup }>
                    { 
                        quickOptions ?
                            quickOptions.map( renderQuickOptions ) 
                            : null
                    }
                    { 
                        menuItems ? 
                            <VerticalMenu 
                                menuItemList={ menuItems }     
                            />
                            : null
                    }
                </div>
            )
        }
    },

    render: function() {
        let { name, onBack } = this.props;
        let style = this.style();

        return (
            <div
                style={ style.header }
                className="image-header"
            >
                <div style={ style.titleGroup }>
                    <span onClick={ onBack } >
                        <LeftArrowIcon
                            style={ style.backButton }
                            size="24"
                        />
                    </span>
                    <h1 className="t-headline">
                        { name }
                    </h1>
                </div>
                { this.renderOptionGroup() }
            </div>
        );
    },

    style() {
        return {
            header: {
                ...marg( this.props ),
                paddingTop: "15px",
                paddingBottom: "15px",
                position: "relative",
                display: "flex",
                justifyContent: "space-between"
            },

            titleGroup: {
                flex: "1",
            },

            backButton: {
                float: "left",
                cursor: "pointer",
                position: "relative",
                marginRight: "10px",
            },

            actionGroup: {
                display: "flex",
                alignItems: "center",
            }
        };
    },
});

SubHeader.propTypes = {
    name: PropTypes.string,
};

export default SubHeader;
