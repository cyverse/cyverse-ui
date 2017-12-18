export const stopPropagation = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    e.stopPropagation();
};
