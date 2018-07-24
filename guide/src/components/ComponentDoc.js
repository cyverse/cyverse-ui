import React from "react";
import { toPairs } from "ramda";
import { Element } from "cyverse-ui";
import { MDBlock } from "./";

class ComponentDoc extends React.Component {
    tableData = prop => {
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

        return (
            <React.Fragment>
                <Element
                    root="h1"
                    whitespace="mb4"
                    typography="display1"
                >
                    {displayName}
                </Element>
                <MDBlock text={description} />
                <Element whitespace="mb4">{children}</Element>
                <Element tag="h2" whitespace="mb2" typography="title">
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
                        {toPairs(meta.props).map(this.tableData)}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default ComponentDoc;
