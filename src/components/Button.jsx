import React from 'react'

const Button = ({ styles }) => {
  return (
   <button
   type='button'
   className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins
    font-medium text-[18px]
   text-primary outline-none
   ${styles}`}
   >
   Get Stared
   </button>
  )
}

export default Button
