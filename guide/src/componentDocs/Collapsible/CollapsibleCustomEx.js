import React from "react";
import { Collapsible, Element, P } from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import { Paper, RaisedButton } from "material-ui";

const CollapsibleCustomEx = props => (
    <Collapsible
        render={({ isOpen, onToggleOpen }) => (
            <Element whiteSpace={{ mb: 4 }}>
                <RaisedButton
                    primary
                    label={`${isOpen ? "hide" : "show"} the goods`}
                    onTouchTap={onToggleOpen}
                />
                <Element whiteSpace={{ mt: 4 }} hide={!isOpen}>
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
                </Element>
            </Element>
        )}
    />
);

export default CollapsibleCustomEx;
