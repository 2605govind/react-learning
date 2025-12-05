import React from 'react'

type buttonProps = {
  data:string,
  action: () => void
}


const Button:React.FC<buttonProps> = ({data, action}) => {
  return (
    <div>Button</div>
  )
}

// const Button = ({data, action}:buttonProps) => {
//   return (
//     <div>Button</div>
//   )
// }
export default Button