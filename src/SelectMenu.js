import React from 'react';
import radium from 'radium';
import { styles, variables, marg } from './styles';

const SelectMenu =  React.createClass({
    displayName: "SelectMenu",

    getInitialState() {
        return {
            isFocused: false,
        }
    },

    propTypes: {
        defaultId: React.PropTypes.oneOfType([
           React.PropTypes.string,
           React.PropTypes.number
        ]),
        optionName: React.PropTypes.func.isRequired,
        onSelectChange: React.PropTypes.func.isRequired,
        list: React.PropTypes.oneOfType([
            React.PropTypes.array
        ]),

        hintText: React.PropTypes.string
    },

    onBlur() {
        this.setState({
            isFocused: false,
        })
    },

    onFocus() {
        this.setState({
            isFocused: true,
        })
    },

    onSelectChange: function(e) {
        let i = e.target.value;
        this.props.onSelectChange(i);
    },

    hintText: function() {
        if (this.props.hintText) {

            return (
                <option value="hint" disabled hidden>
                    {this.props.hintText}
                </option>
            );
        }
    },

    renderOption: function (item, i) {
            return (
                <option key={i} value={i}>
                    {this.props.optionName(i)}
                </option>
            );
    },

    render: function () {
        let value = this.props.defaultId;
        if (this.props.hintText) { value = "hint" }
        if (this.props.list) {
            let options = this.props.list.map(this.renderOption);
            
            return (
            <select
                style={ this.style().select }
                value={ value }
                onChange={ this.onSelectChange }
                onFocus={ this.onFocus }
                onBlur={ this.onBlur }
            >
                {/* TODO resolve hintText solution
                    this.hintText() */}
                {options}
            </select>
            );
        }

        return (
            <select 
                style={ this.style().select }
                onFocus={ this.onFocus } 
                onBlur={ this.onBlur } 
                value={this.props.defaultId}
            >
                <option key="1" value="1" > 
                    Loading... 
                </option>
            </select>
        );
    },

    style() {
        let focused = this.state.isFocused;
        let color = this.props.color || "rgba(0,0,0,.3)";
        let borderColor = focused ? color : "rgba(0,0,0,.15)";
        return {
            select: {
                cursor: "pointer",
                width: "100%",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: `solid 3px ${borderColor}`,
                fontSize: "14px",
                borderRadius: "0px",
                appearance: "none",
                MozAppearance: "none",
                backgroundColor: "rgba(255,255,255,0)",
                backgroundPosition: "right 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url('data:image/svg+xml;utf8, <svg fill="${borderColor}" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
                paddingTop: "8px",
                paddingRight: "1.5em",
                paddingBottom: "8px",
                paddingLeft: "8px",
                ...marg(this.props),

                ':focus': {
                    outline: "none",
                }

            }
        }
    },
});

export default radium(SelectMenu)
