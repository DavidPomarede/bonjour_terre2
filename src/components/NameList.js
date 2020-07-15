import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 32,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 35,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>



        // const personList = persons.map(person => 
    // (
    //     <h2>
    //         I am {person.name}. I am {person.age} years old. I know {person.skill}.
    //     </h2>
    // ))

    // LISTS, ARRAYS, WITH NON-OBJECTS, BELOW:




    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2>{name}</h2>)

    // return <div>{nameList}</div>

    // RIGHT WAY TO DO THIS IS ABOVE 


    // return (

        // USE .map() 

        // <div>
        //     {
        //         names.map(name => <h2>{name}</h2>)
        //     }
        // </div>

        // NOT THIS:

        // <div>
        //         <h1>{names[0]}</h1>
        //         <h1>{names[1]}</h1>
        //         <h1>{names[2]}</h1>
        // </div>
    // )
}

export default NameList