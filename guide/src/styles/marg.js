import React from 'react';
import { variables } from '../styles';

const sizes = variables.l.margSizes;

const marg = ( props ) => {

    if (props.mr) {
        if (props.mr.substring) {
            return {
                marginRight: props.mr,
            }
        }
        return {
            marginRight: `${sizes[props.mr - 1]}px`
        }
    }

    if (props.mb) {
        if (props.mb.substring) {
            return {
                marginBottom: props.mb,
            }
        }
        return {
            marginBottom: `${sizes[props.mb -1]}px`
        }
    }

    if (props.ml) {
        if (props.ml.substring) {
            return {
                marginLeft: props.ml,
            }
        }
        return {
            marginLeft: `${sizes[props.ml -1]}px`
        }
    }

    if (props.mt) {
        if (props.mt.substring) {
            return {
                marginTop: props.mt,
            }
        }
        return {
            marginTop: `${sizes[props.mt -1]}px`
        }
    }

    if (props.ms) {
        if (props.ms.substring) {
            return {
                marginRight: props.ms,
            }
        }
        return {
            marginRight: `${sizes[props.ms -1] * .5}px`,
            marginLeft: `${sizes[props.ms -1] * .5}px`
        }
    }
}

export default marg;
