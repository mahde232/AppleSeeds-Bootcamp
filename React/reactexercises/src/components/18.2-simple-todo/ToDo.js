import React,{useState} from 'react'

export default function ToDo() {
    const [coursesArray, setCourses] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ])

    const changeSubjectStatus = (e) => {
        //setAbc(abc => abc.filter(key => key.id === props.xyz)); this removes a specific key from the array of objects
    
        let tempArray = [...coursesArray];
        let indexOfCourse = tempArray.findIndex( course => course.name === e.target.getAttribute('data-key'))
        tempArray[indexOfCourse].completed = !tempArray[indexOfCourse].completed
        setCourses(tempArray)
    }
    return (
        <div>
            {coursesArray.map((course,idx) => {
                return <div key={idx} >{course.completed ? (<span><s>{course.name}</s> <i onClick={(e)=> changeSubjectStatus(e)} data-key={course.name} data-completed={course.completed} className="far fa-check-square"></i></span>) : (<span>{course.name} <i onClick={(e)=> changeSubjectStatus(e)} data-key={course.name} data-completed={course.completed} className="far fa-square"></i></span>)}</div>
            })}
        </div>
    )
}
