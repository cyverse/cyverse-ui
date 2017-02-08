import React, { PropTypes } from 'react';
import Dimensions from 'react-dimensions';
import randomcolor from 'randomcolor';
import { styles, marg } from './styles';
import { EditIcon } from './icons';
import MediaCard from './MediaCard';
import Hr from './Hr';
import ProgressAvatar from './ProgressAvatar';
import Checkbox from './Checkbox';
import TextField from './TextField';

const InstanceCard = React.createClass({

    getInitialState() {
        return {
            title: this.props.title,
            avatarIsHovered: false,
            titleIsHoverd: false,
            editTitle: false,
        }
    },

    onAvatarEnter() {
        this.setState({
            avatarIsHovered: true
        });
    },

    onAvatarLeave() {
        this.setState({
            avatarIsHovered: false
        });
    },

    onChangeTitle(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onChangeTitle(e.target.value)
        this.setState({ editTitle: false })
    },

    onCheck(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        this.props.onBatchClick(e);
    },

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

        let renderTitle = this.state.editTitle ? (
            <form onSubmit = { this.onChangeTitle } >
                <TextField
                    passRef={ ref => { 
                        if ( ref != null) {
                            ref.focus() 
                        }
                    }}
                    id = "changeInstanceName"
                    onBlur = { this.onChangeTitle }
                    color = { this.props.primaryColor }
                    value = { this.state.title }
                    onChange = { e => { 
                        this.setState({ title: e.target.value }) 
                    }}
                /> 
            </form>
        ) : (
            <h1 
                onMouseEnter = { e => { 
                    this.setState({ titleIsHovered: true }) 
                }}
                onMouseLeave = { e => { 
                    this.setState({ titleIsHovered: false }) 
                }}
                onClick = { e => { 
                    e.nativeEvent.stopImmediatePropagation();
                    e.preventDefault();
                    e.stopPropagation();
                    this.setState({ editTitle: true }) 

                }}
                style={{ ...styles.t.headline, cursor: "pointer" }}
            >
                { title }
                <EditIcon 
                    style={ this.styles().editIcon }
                    size = { 18 }
                    ml = { 4 }
                />
            </h1>
        );

        return (
            <div>
                <header 
                    style={{ 
                        ...marg({ mb: 5}), 
                        lineHeight: "1.3" 
                    }}
                >
                    { renderTitle }
                    <div 
                        style={ styles.t.subheading }
                    >
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
        let avatar = (
                <ProgressAvatar
                    children = { this.props.title[0].toUpperCase() }
                    percent = { this.props.percent }
                    size = { 35 }
                    backgroundColor = { randomcolor({ 
                            seed: this.props.title
                        })} 
                />
        );

        if ( this.props.batchMode || this.state.avatarIsHovered ) {
            avatar = ( 
                <Checkbox
                    onClick = { this.onCheck }
                    checked = { this.props.checked }
                    style = {{ margin: "auto", width: "75%" }}
                    color = { this.props.primaryColor }
                />
            )
        }

        return (
            <div
                style = {{
                    position: "relative",
                    zIndex: 1,
                    display: "flex", 
                    borderRadius: "50%",
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "35px", 
                    height: "35px" 
                }}
                onMouseEnter = { this.onAvatarEnter }
                onMouseLeave = { this.onAvatarLeave }
            >
                { avatar }
            </div>
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
            width: "125px", 
            ...styles.t.body2 
        }

        if (this.props.containerWidth <= 500) {
            style.summary.display = "block";
            style.summaryCell.paddingRight = "0";
            style.summaryCell.paddingBottom = "10px";
        }

        style.editIcon = {
            opacity: "0",
        };

        if ( this.state.titleIsHovered ) {
            style.editIcon.opacity = "1";
        }

        return style
    },
});

InstanceCard.propTypes = {
    className: PropTypes.string,
};

export default Dimensions({ containerStyle: { height: "auto"}})(InstanceCard);
