import React from 'react'
import Button from './Button'
function Bar({colFun}) {
  return (
    <div className='fixed h-24 w-full flex justify-center items-center bg-blue-300 bottom-20 rounded-lg'>
    <div className='rounded-lg w-2/3 h-3/5 bg-white flex justify-evenly items-center'>
        <Button color='purple' changer={colFun}/>
        <Button color='red' changer={colFun}/>
        <Button color='pink' changer={colFun}/>
        <Button color='green' changer={colFun}/>
        <Button color='yellow' changer={colFun}/>
        </div>
    </div>
  )
}

export default Bar
