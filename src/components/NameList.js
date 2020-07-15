import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    return (

        // USE .map() 

        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>

        // NOT THIS:

        // <div>
        //         <h1>{names[0]}</h1>
        //         <h1>{names[1]}</h1>
        //         <h1>{names[2]}</h1>
        // </div>
    )
}

    export default NameList