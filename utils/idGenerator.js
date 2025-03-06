const findFirstAvailableId = (array) => {
    if (array.length === 0) return 1;

    const arrayIds = array.map(item => item.id).sort((a, b) => a - b);
    let nextId = 1;

    for (const id of arrayIds) {
        if (id !== nextId) break;
        nextId++;
    }
    return nextId;
}

module.exports= {
    findFirstAvailableId,
}