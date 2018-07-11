import React from "react";
import { Element } from "cyverse-ui";
import ThemeExamples from "./ThemeExamples";
import ThemeExList from "../themeDocs/ThemeExList";

const Theming = () => (
    <section>
        <Element root="h1" typography="display2" whitespace="mb4">
            Theming and Theme Colors
        </Element>
        {ThemeExList.map((component, i) => (
            <ThemeExamples key={i} component={component} i={i} />
        ))}
    </section>
);

export default Theming;
