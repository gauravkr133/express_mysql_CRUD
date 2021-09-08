exports.multipleColumnSet = (object)=>{
    if(typeof object !== 'object'){
        throw new Error('Invalid input');
    }
    const keys = Object.keys(object);
    const values = Objects.values(object);

    columnSet = keys.map(key => `${key}= ?`).join(',');
    return {
        columnSet,
        values
    }
    
}

