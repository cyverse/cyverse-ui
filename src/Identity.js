import React from 'react';
import { marg } from './styles';
import P from './P';
import Title from './Title';

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
                    >
                        { secondaryText }
                    </P>
                </div>
            </div>
        </div>
    )
};

export default Identity
