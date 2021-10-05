async function getAllPeople() {
    const urlTemplate = 'https://swapi.dev/api/people/'
    let arrOfPeople = [];
    for(let i=1; i<=10; i++)
    {
        const request = await(await(fetch(`${urlTemplate}${i}`))).json();
        const planetRequest = await(await(fetch(request.homeworld))).json();

        let singlePerson = {
            name: request.name, //grab name from person request
            height: request.height, //grab height from person request
            hair: request.hair_color, //grab hair from person request
            planet: {
                planetName: planetRequest.name, //grab planet from person request, it's a url, so we need another API call, grab name from the planet request
                planetPopulation: planetRequest.population //grab planet from person request, it's a url, so we need another API call, grab population from the planet request
            }
        }
        arrOfPeople.push(singlePerson);
        console.log(singlePerson);
    }
    return arrOfPeople;
}
function createTableRowHeading(){
    let trObj = document.createElement('tr');
    trObj.style.border = '1px solid black'
    let temp = document.createElement('td')
    temp.innerHTML='Name';
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.innerHTML='Hair'
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.innerHTML='Height'
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.innerHTML='Planet Name'
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.innerHTML='Planet Population'
    trObj.appendChild(temp)

    trObj.style.backgroundColor = 'green'
    return trObj;
}

function createTableRow(person){

    let trObj = document.createElement('tr');
    trObj.style.border = '1px solid black'

    let temp = document.createElement('td')
    temp.innerHTML=`${person.name}`;
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.hair}`;
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.height}`;
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.planet.planetName}`;
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.planet.planetPopulation}`;
    trObj.appendChild(temp)

    trObj.style.backgroundColor = 'lightgreen'
    return trObj;
}

function createTable(res) {
    let tableObj = document.createElement('table');

    tableObj.style.textAlign = 'center';
    tableObj.style.borderCollapse = 'collapse';
    tableObj.style.borderSpacing = '0';
    let caption = tableObj.createCaption();
    caption.textContent = 'Star Wars';
    caption.style.backgroundColor = 'navy';
    caption.style.color = 'white';

    tableObj.appendChild(createTableRowHeading());

    res.forEach(person => {
        tableObj.appendChild(createTableRow(person));
    });

    document.body.appendChild(tableObj);
}


function createTableManually(res) {
    let str = `<table style="text-align: center; border-collapse: collapse; border-spacing: 0px; border: 1px solid black; margin-top: 20px;">`;
    str+=`<caption style="background-color: navy; color: white;">Star Wars</caption>`
    str+=`<tr>`
    str+=`<td style="border: 1px solid black">Name</td>`
    str+=`<td style="border: 1px solid black">Hair</td>`
    str+=`<td style="border: 1px solid black">Height</td>`
    str+=`<td style="border: 1px solid black">Planet</td>`
    str+=`<td style="border: 1px solid black">Planet Population</td>`
    str+=`</tr>`
    res.forEach(person =>{
        str+=`<tr style="border: 1px solid black">`
        str+=`<td style="border: 1px solid black">${person.name}</td>`
        str+=`<td style="border: 1px solid black">${person.hair}</td>`
        str+=`<td style="border: 1px solid black">${person.height}</td>`
        str+=`<td style="border: 1px solid black">${person.planet.planetName}</td>`
        str+=`<td style="border: 1px solid black">${person.planet.planetPopulation}</td>`
        str+=`</tr>`
    })
    str+= `</table>`
    document.body.innerHTML+=(str);
}

async function createBoth() {
    let res = await getAllPeople();
    createTable(res);
    createTableManually(res);
}
let btnObj = document.querySelector('#btn');

btnObj.addEventListener('click',createBoth);