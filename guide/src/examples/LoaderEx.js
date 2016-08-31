import React, { PropTypes } from 'react';
import theme from '../theme';
import { Loader } from 'troposphere-ui';
import { Sheet, Code } from '../components';

const LoaderEx = React.createClass({

    render() {
        return (
            <div>
                <Sheet mb={ 4 }>
                    <Loader
                        color={ theme.color.primary }
                    />
                </Sheet>
                <Code children={
`
<Sheet mb={ 4 }>
    <Loader
        color={ theme.color.primary }
    />
</Sheet>
`                   }
                />
            </div>
        );
    }
});

LoaderEx.propTypes = {
    className: PropTypes.string,
};

export default LoaderEx;
