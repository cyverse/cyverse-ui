import React from "react";
import { Element } from "cyverse-ui";

const ThemeExample = ({ component: { name, desc } }) => (
    <Element root="section" whitespace="mb8">
        <Element root="h2" typography="display1" whitespace="mb3">
            {name}
        </Element>
        {desc}
    </Element>
);

export default ThemeExample;
