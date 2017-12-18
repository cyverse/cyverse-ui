import React from 'react';
import PropTypes from 'prop-types';
import { marg } from './styles';
import P from './P';
import Title from './Title';

/**
* Identity is used on a card or view to provide context to the content. A resource for example, would have the resource name as the primary text and useful meta as the secondary text, like the date the resource was created or a quick summary.

An Identity is located at the top left of a card or view. A small Identity is used on cards and a large Identity or small Identity can be used on views.
 */
const Identity = (props) => {
    const {
        lg,
        image,
        primaryText,
        secondaryText,
    } = props;

    const imageSize = lg ? 60 : 40;
    const renderImage = React.cloneElement(
        image, { size: imageSize });

    const margSize = lg ? 3 : 2;
    const imgMarg = marg({ mr: margSize });

    const style = {
        wrapper: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            ...marg(props),
        },
        img: {
            borderRadius: "999px",
            overflow: "hidden",
            ...imgMarg,
        },
    };

    return (
        <div style={ style.wrapper }>
            <div style={ style.img }>
                { renderImage }
            </div>
            <div>
                <div>
                    <Title
                        m={0}
                        title={ lg }
                        body2={ !lg }
                    >
                        { primaryText }
                    </Title>
                    <P
                        m={0}
                        subheading={ lg }
                        caption={ !lg }
                        lineHeight="1.15"
                    >
                        { secondaryText }
                    </P>
                </div>
            </div>
        </div>
    )
};

Identity.propTypes = {
    /**
     * The first line of text, usually a name.
     */
    primaryText: PropTypes.node,
    /**
     * The second line of text, usually a date or caption.
     */
    secondaryText: PropTypes.node,
    /**
     * Expects MUI's Avatar.
     */
    image: PropTypes.element,
    /**
     * If true Identity is rendered larger.
     */
    lg: PropTypes.bool,
};

Identity.displayName = "Identity";

export default Identity
