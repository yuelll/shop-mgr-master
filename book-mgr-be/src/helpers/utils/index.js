const getYearByTimeStamp = (ts) =>{
    const data = new Date(ts);

    return data.getFullYear();
};

const getDateByTimeStamp = (ts) =>{
    const data = new Date(ts);

    return data.getDate();
};


module.exports = {
    getYearByTimeStamp,
    getDateByTimeStamp,
};

