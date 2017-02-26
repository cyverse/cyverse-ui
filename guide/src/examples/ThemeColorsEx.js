import React from 'react';
import R from 'ramda';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeColorsEx = React.createClass({
    getSwatch(color) {
        console.log(this.props.muiTheme);
        return (
            <Paper
                style={{
                    margin: "5px",
                    color: "white",
                    fontSize: "11px",
                    background: color[1],
                    flexBasis: "20%",
                    height: "100px",
                }}
            >
                <div style={{ padding: "5px", background: "rgba(0,0,0,.2"}}>
                    { color[0] }
                </div>
            </Paper>
        )
    },

    render() {
        const { 
            muiTheme: { 
                palette
            } 
        } = this.props;

        
        return (
            <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%"
                }}
            >
                {  R.toPairs(palette).map( this.getSwatch ) }
            </div>
        )
    }
});

export default muiThemeable()(ThemeColorsEx);
