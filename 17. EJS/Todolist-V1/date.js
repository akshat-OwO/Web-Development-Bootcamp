const date = () =>{
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    return today.toLocaleDateString('en-Us', options);
}

const day = () =>{
    const today = new Date();
    const options = {
        weekday: 'long'
    };
    
    return today.toLocaleDateString('en-Us', options);
}

exports.date = date;
exports.day = day;