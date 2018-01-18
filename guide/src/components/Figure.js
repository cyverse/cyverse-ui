import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";
import { styles } from "cyverse-ui/styles";
import { Title, Element } from "cyverse-ui";

class Figure extends React.Component {
    render() {
        return (
            <Element tag="figure" whiteSpace={{ m: 0, mb: 3 }}>
                <Element
                    tag="figcaption"
                    typography="title"
                    color="white"
                    background="primary1Color"
                    whiteSpace={{ p: 2 }}
                >
                    <Title title m={0}>
                        {this.props.caption}
                    </Title>
                </Element>
                <Element
                    style={{
                        border: "solid 1px lightgrey",
                        borderTop: "none"
                    }}
                    whiteSpace={{ p: 3 }}
                >
                    {this.props.children}
                </Element>
            </Element>
        );
    }
}

Figure.propTypes = {
    className: PropTypes.string
};

export default Figure;
