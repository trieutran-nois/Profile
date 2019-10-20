
const formatCapitalize = string => {
    return string.toLowerCase().split(' ').map(char => {
        return char[0].toUpperCase() + char.slice(1);
    }).join(' ');
}

const validatePhoneNumber = input => {
    let regex = /^[0-9]{7,}$/;
    return regex.test(input);
}

export {
    formatCapitalize,
    validatePhoneNumber
}
