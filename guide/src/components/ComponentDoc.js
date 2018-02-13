import React from "react";
import R from "ramda";
import Scroll from "react-scroll";
import { Hr, Element, Section } from "cyverse-ui";
import { Header, SideNav, Figure, ThemeExamples, MDBlock } from "./";

const ScrollAnchor = Scroll.Element;

class ComponentDoc extends React.Component {
    tableData = prop => {
        const { meta } = this.props;
        const defaultValue = prop[1].defaultValue;
        const renderDefault = defaultValue ? defaultValue.value : "";

        return (
            <tr key={prop[0]}>
                <td>{prop[0]}</td>
                <td>
                    <code>{prop[1].type.name}</code>
                </td>
                <td>
                    <code>{renderDefault}</code>
                </td>
                <td>{prop[1].description}</td>
            </tr>
        );
    };

    render() {
        const { meta, children } = this.props;
        const { description, displayName } = meta;
        const anchorId = displayName
            .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
            .replace(
                /([A-Z])/g,
                ([letter]) => `-${letter.toLowerCase()}`
            );

        return (
            <Section
                style={{ position: "relative" }}
                key={displayName}
            >
                <ScrollAnchor
                    id={anchorId}
                    style={{
                        position: "absolute",
                        top: "-50px",
                    }}
                />

                <Element
                    root="h1"
                    whitespace="mb4"
                    typography="headline"
                    color="primary1Color"
                >
                    {displayName}
                </Element>
                <MDBlock text={description} />
                <Element whitespace="mb4">{children}</Element>
                <Element>
                    <Element
                        tag="h2"
                        whitespace="mb2"
                        typography="title"
                    >
                        {`${displayName} Properties`}
                    </Element>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Default</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {R.toPairs(meta.props).map(
                                this.tableData
                            )}
                        </tbody>
                    </table>
                </Element>
            </Section>
        );
    }
}

export default ComponentDoc;
