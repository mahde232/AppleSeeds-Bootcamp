const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

school.findPerson = function(type,id) {
    return this[type].filter(obj => {
        return obj.id === id ? true : false;
    })[0];
}
school.assignStudent = function(id,subject) {
    this[`teachers`].forEach(teacher => {
        if(teacher.capacityLeft > 0 && teacher.subjects.includes(subject))
        {
            teacher.students.push(this.findPerson('students',id));
            teacher.capacityLeft--;
        }
    });
}
school.assignTeachersSubject = function(id,subject) {
    this[`teachers`].forEach(teacher => {
        if(teacher.id === id && !teacher.subjects.includes(subject))
            teacher.subjects.push(subject);
    })
}

console.log(school.findPerson('students',13));
console.log();
console.log(`teacher Pinchas has ${school[`teachers`][0].capacityLeft} space left, currently has these students: ${school[`teachers`][0].students}`);
console.log(`teacher Williams has ${school[`teachers`][1].capacityLeft} space left, currently has these students: ${school[`teachers`][1].students}`);
school[`students`].forEach(student => {
    school.assignStudent(student.id,'biology') //asign to first teacher
    school.assignStudent(student.id,'history') //asign to second teacher
})
console.log(`teacher Pinchas has ${school[`teachers`][0].capacityLeft} space left, currently has these students: ${school[`teachers`][0].students}`);
console.log(`teacher Williams has ${school[`teachers`][1].capacityLeft} space left, currently has these students: ${school[`teachers`][1].students}`);
console.log();
console.log('pinchas subjects: ',school[`teachers`][0].subjects);
school.assignTeachersSubject(1,'Sport');
console.log('pinchas subjects: ',school[`teachers`][0].subjects);