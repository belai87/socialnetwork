
export const required = (value) => {
    if(value) return undefined;

    return('Fields is required')
}

export const maxLengthCreator = (maxLength) =>  (value) => {
    if(value.length > maxLength) return `Max length > ${maxLength} symbols`;

    return undefined;
}