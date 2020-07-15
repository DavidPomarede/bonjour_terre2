import React from 'react'

const Hello = () => {

   // with JSX

    return (
        <div>
        <h1> Hello Vishwas</h1>
        </div>
    )


    // without JSX

 //   return React.createElement(
 //       'div', 
//        {id: 'hello', className: 'dummy class'}, 
//        React.createElement('h1', null, 'Bonjour Terre'))
}

export default Hello