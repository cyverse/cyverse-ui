import React from "react";
import { Element } from "cyverse-ui";

const ThemeExample = ({ component: { name, desc } }) => (
    <React.Fragment>
        <Element root="h2" typography="display1" whitespace="mb3">
            {name}
        </Element>
        {desc}
    </React.Fragment>
);

export default ThemeExample;
