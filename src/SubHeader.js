import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import { marg, pad } from './styles';
import VerticalMenu from './VerticalMenu';
import Div from './Div';
import Title from './Title';
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
                                children={ menuItems }     
                            />
                            : null
                    }
                </div>
            )
        }
    },

    render() {
        let { name, onBack } = this.props;
        let style = this.style();

        return (
            <div
                style={ style.header }
            >
                <div style={ style.titleGroup }>
                    <IconButton onTouchTap={ onBack } >
                        <LeftArrowIcon
                            size="25"
                        />
                    </IconButton>
                    <Title h1 title-1 >
                        { name }
                    </Title>
                </div>
                { this.renderOptionGroup() }
            </div>
        );
    },

    style() {
        return {
            header: {
                ...marg( this.props ),
                position: "relative",
                display: "flex",
                justifyContent: "space-between"
            },

            titleGroup: {
                display: "flex",
                flex: "1",
                alignItems: "center",
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
