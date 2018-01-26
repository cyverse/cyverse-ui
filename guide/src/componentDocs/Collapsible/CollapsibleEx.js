import React from "react";
import {
    Collapsible,
    CollapsibleSummary,
    CollapsibleDetail,
    P
} from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import Paper from "material-ui/Paper";

const CollapsibleEx = props => (
    <Collapsible
        render={({ isOpen, onToggleOpen }) => (
            <Paper
                style={{
                    ...marg({ mb: 4 })
                }}
            >
                <CollapsibleSummary
                    onToggleOpen={onToggleOpen}
                    isOpen={isOpen}
                >
                    I like bacon
                </CollapsibleSummary>
                <CollapsibleDetail isOpen={isOpen}>
                    <P>
                        Bacon ipsum dolor amet burgdoggen tri-tip
                        pancetta shankle chuck leberkas. Turkey swine
                        filet mignon short ribs tongue ribeye bresaola
                        pork tenderloin. Meatball jerky bresaola
                        fatback pork belly chicken pork chop boudin
                        sausage frankfurter. Bacon tri-tip shank
                        biltong frankfurter t-bone turkey. Ribeye
                        shankle meatball chicken, cupim corned beef
                        tongue doner kevin leberkas sirloin. Biltong
                        turducken shoulder chuck picanha. Brisket
                        doner prosciutto venison turkey, short ribs
                        corned beef pancetta pork loin alcatra
                        leberkas shank sausage ribeye hamburger.
                    </P>
                </CollapsibleDetail>
            </Paper>
        )}
    />
);

export default CollapsibleEx;
