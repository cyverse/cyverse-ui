import React from "react";
import { InfoBlock, P, Element } from "cyverse-ui";
import { Code } from "../../components";
import Paper from "material-ui/Paper";

class InfoBlockEx extends React.Component {
    render() {
        return (
            <Paper>
                <Element whitespace={["mb3", "p3"]}>
                <InfoBlock
                    text={
                        <P>
                            This is a default InfoBlock that uses an
                            info icon. Here we would explain basic
                            information for user onbording.
                        </P>
                    }
                />
                <InfoBlock
                    warning
                    text={
                        <div>
                            <P>
                                This is a warning InfoBlock that uses
                                a warning icon. Here we might warn the
                                user of an action's implications.
                            </P>
                            <P>
                                You have to format the text inside
                                with markup. For proper formatting in
                                "InfoBlock" use the "P" component on
                                blocks of text. This is to offer the
                                flexibility to have things like
                                multi-paragraphs, <a className="Link">links</a>, or{" "}
                                <code className="CodeInline">
                                    code
                                </code> in your messages.
                            </P>
                        </div>
                    }
                />
                </Element>
            </Paper>
        );
    }
}

export default InfoBlockEx;
