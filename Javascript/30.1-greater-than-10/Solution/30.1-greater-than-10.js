function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if(num > 10)
            resolve();
        else
            reject();
    })
}

checkNumber(11).then(()=> console.log('Greater')).catch(()=>console.log('Lesser'))