import React from "react";
import { Figure, ComponentDoc, CodeBlock } from "../../components";

import EnhancedTableEx from "./EnhancedTableEx";
import EnhancedTableExCode from "!raw-loader!./EnhancedTableEx";
import EnhancedTableSimpleEx from "./EnhancedTableSimpleEx";
import EnhancedTableSimpleExCode from "!raw-loader!./EnhancedTableSimpleEx";
import { parse } from "react-docgen";
import EnhancedTable from "!raw-loader!cyverse-ui/EnhancedTable";
const meta = parse(EnhancedTable);

class EnhancedTableDoc extends React.Component {
    render() {
        return (
            <ComponentDoc meta={meta}>
                <Figure caption={"EnhancedTable Simple Example"}>
                    <EnhancedTableSimpleEx />
                    <CodeBlock text={EnhancedTableSimpleExCode} />
                </Figure>
                <Figure caption={"EnhancedTable Full Example"}>
                    <EnhancedTableEx />
                    <CodeBlock text={EnhancedTableExCode} />
                </Figure>
            </ComponentDoc>
        );
    }
}

export default EnhancedTableDoc;
