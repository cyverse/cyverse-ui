import React from 'react';
import { variables } from '../styles';

const sizes = variables.l.margSizes;

const marg = ( props ) => {

    let style = {};

    if (props.mr) {
        if (props.mr.substring) {
            style = {
                ...style,
                ...{
                    marginRight: props.mr,
                }
            };
        }
        style = {
            ...style,
            ...{
                marginRight: `${sizes[props.mr - 1]}px`
            }
        };
    }

    if (props.mb) {
        if (props.mb.substring) {
            style = {
                ...style,
                ...{
                    marginBottom: props.mb,
                }
            };
        }
        style = {
            ...style,
            ...{
                marginBottom: `${sizes[props.mb -1]}px`
            }
        };
    }

    if (props.ml) {
        if (props.ml.substring) {
            style = {
                ...style,
                ...{
                    marginLeft: props.ml,
                }
            };
        }
        style = {
            ...style,
            ...{
                marginLeft: `${sizes[props.ml -1]}px`
            }
        };
    }

    if (props.mt) {
        if (props.mt.substring) {
            style = {
                ...style, 
                ...{
                    marginTop: props.mt,
                }
            };
        }
        style = {
            ...style,
            ...{
                marginTop: `${sizes[props.mt -1]}px`
            }
        };
    }

    if (props.ms) {
        if (props.ms.substring) {
            style = {
                ...style,
                ...{
                    marginRight: props.ms,
                }
            };
        }
        style = {
            ...style,
            ...{
                marginRight: `${sizes[props.ms -1] * .5}px`,
                marginLeft: `${sizes[props.ms -1] * .5}px`
            }
        };
    }

    return style
}

export default marg;
