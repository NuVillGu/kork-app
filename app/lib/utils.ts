export const formatObjectValue = (value) => {
    return value
        .replace(/\\/g, '')
        .replace(/"({)/g, '$1')
        .replace(/\}"(?=,)/g, '}')
        .replace(/^{/g, '[')
        .replace(/}$/, ']') 
        .replace(/"\]/g, ']'); 
};