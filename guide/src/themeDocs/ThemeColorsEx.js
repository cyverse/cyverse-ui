import React from 'react';
import R from 'ramda';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeColorsEx = React.createClass({
    getSwatch(color) {
        return (
            <Paper
                key={ color[0] }
                style={{
                    margin: "1%",
                    color: "white",
                    fontSize: "11px",
                    minWidth: "100px",
                    background: color[1],
                    flex: "0 1 22%",
                    height: "100px",
                }}
            >
                <div style={{ padding: "5px", background: "rgba(0,0,0,.2"}}>
                    { color[0] }
                    <br/>
                    { color[1] }
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
                    justifyContent: "space-around",
                    width: "100%"
                }}
            >
                {  R.toPairs(palette).map( this.getSwatch ) }
            </div>
        )
    }
});

export default muiThemeable()(ThemeColorsEx);
