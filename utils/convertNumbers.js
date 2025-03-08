function convertNumbers(obj) {
    const newObj = {};
    for (const key in obj) {
        newObj[key] = isNaN(obj[key]) ? obj[key] : Number(obj[key]);
    }
    return newObj;
}

module.exports = {
    convertNumbers,
}