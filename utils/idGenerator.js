const findFirstAvailableIdWithIndex = (array) => {
    if (array.length === 0) return {id: 1, index: 0};
    let nextId = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id !== nextId) {
            return {id: nextId, index: i};
        }
        nextId++;
    }
    return {id: nextId, index: array.length};
}

module.exports = {
    findFirstAvailableIdWithIndex,
}