import React from 'react'
import { Data } from '../../App'
import { Data1 } from '../../App'
import { useContext } from 'react'

const Component3 = () => {

  const userName = useContext(Data);
  const Age = useContext(Data1);
  return (
    // <Data.Consumer>
    //   {
    //     (name) => {

    //       return  <Data1.Consumer>

    //         {
    //           (age) => {
    //             return (
    //               <div>
    //                 <h2>Name: {name}</h2>
    //                 <h2>Age: {age}</h2>
    //               </div>
    //             )
    //           }
    //         }
            
    //       </Data1.Consumer>
    //     }
    //   }
    // </Data.Consumer>


    <div>
       <h2>Name: {userName}</h2>
        <h2>Age: {Age}</h2>
    </div>
  )
}

export default Component3


// to solve this problem use usecontext hook