import React, { PropTypes } from 'react';
import { styles } from 'troposphere-ui/lib/styles';
import { Title } from './index';

const Figure = React.createClass({

    render() {
        let color = this.props.color || "grey";
        return (
            <figure style={{
                    margin: "0px",
                    border: "solid 1px lightgrey",
                    padding: "10px",
                }}
            >
                <figcaption style={{
                        ...styles.t.title,
                        background: color,
                        color: "white",
                        padding: "10px",
                        margin: "-11px -11px 20px",
                    }}
                >
                    <Title title noMarg>
                        { this.props.caption }
                    </Title>
                </figcaption>
                { this.props.children }
            </figure>

        );
    }
});

Figure.propTypes = {
    className: PropTypes.string,
};

export default Figure;
