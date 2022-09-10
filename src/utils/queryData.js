let is_ok = true;

let queryData = (task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task);
            },);
        } else {
            reject("Error")
        }
    })
}

export default queryData;