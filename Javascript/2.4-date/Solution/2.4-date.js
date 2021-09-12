function describeToday1() {
    console.log(`Today is ${(new Date().toLocaleDateString('en-US',{weekday: 'long'}))} the ${(new Date().toLocaleDateString('en-US',{day: 'numeric'}))} of ${(new Date().toLocaleDateString('en-US',{month: 'long'}))}, ${(new Date().toLocaleDateString('en-US',{year: 'numeric'}))} `);
}
function describeToday2() {
    console.log(new Intl.DateTimeFormat('en-US' , {dateStyle: 'full'}).format(new Date()));
}

describeToday1();
describeToday2();