function toCamelCase(str) {
    let temp;
    if(str.includes('-'))
        temp = str.split('-');
    if(str.includes('_'))
        temp = str.split('_');
    for(let i=1; i < temp.length; i++)
    {
        temp[i] = temp[i].replace(temp[i].charAt(0),temp[i].charAt(0).toUpperCase())
    }
    return temp.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("Asaad_the_boss"));