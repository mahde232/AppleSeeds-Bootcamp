function nb_year(p0,percent,aug,p) {
    let i = 0;
    let tempPopulation = p0;
    while (tempPopulation < p)
    {
        tempPopulation += tempPopulation * (percent/100) + aug;
        i++;
    }
    return i;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
console.log(nb_year(1000, 2, 50, 1200));