import React from 'react'

//function Greet() {
//    return <h1>Hello David</h1>;
//}

//export const Greet = () => <h1> Hello David </h1>

// this is a "named export" versus below, a "default export"



const Greet = props => {
console.log(props)
return (
    <div>
        <h1>
            Hello {props.name} a.k.a. {props.heroName}
        </h1>
        {props.children}
    </div>
)

}


export default Greet