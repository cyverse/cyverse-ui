import React, { PropTypes } from 'react';
import { Tag } from 'cyverse-ui';
import { TagGroup } from 'cyverse-ui/utils';

import { Sheet, Code } from '../components';

const TagEx = React.createClass({

    onClose(e) {
        console.log( e, "closed");
    },

    onTouch(e) {
        console.log( e, "touched");
    },

    render() {
        return (
            <div>
                <Sheet mb={ 4 }>
                    <TagGroup>
                        <Tag
                            background="skyblue"
                            onTouch={ this.onTouch }
                            onClose={ this.onClose }
                        >
                            Skateboarding
                        </Tag>
                        <Tag
                            background="skyblue"
                            onClose={ this.onClose }
                        >
                            Rock'n'Roll
                        </Tag>
                        <Tag
                            TooltipMessage="I have a Tooltip!"
                            background="skyblue"
                            onClose={ this.onClose }
                        >
                            Concrete
                        </Tag>
                    </TagGroup>
                </Sheet>

                <Code children={
`<Sheet mb={ 4 }>
    <TagGroup>
        <Tag
            background="skyblue"
            onTouch={ this.onTouch }
            onClose={ this.onClose }
        >
            Skateboarding
        </Tag>
        <Tag
            background="skyblue"
            onClose={ this.onClose }
        >
            Rock'n'Roll
        </Tag>
        <Tag
            TooltipMessage="I have a Tooltip!"
            background="skyblue"
            onClose={ this.onClose }
        >
            Concrete
        </Tag>
    </TagGroup>
</Sheet>`
                }
            />
        </div>
        );
    }
});

TagEx.propTypes = {
    className: PropTypes.string,
};

export default TagEx;
