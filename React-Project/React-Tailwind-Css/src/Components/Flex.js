import React from 'react'

function Flex() {
  return (
    <div>
      <div className='h-full w-full bg-green-100 absolute flex justify-around items-center flex-col'>
        <div className='h-52 w-52 bg-lime-300 flex justify-around items-center'>1</div>
        <div className='h-52 w-52 bg-fuchsia-200 flex justify-around items-center'>2</div>
        <div className='h-52 w-52 bg-emerald-400 flex justify-around items-center'>3</div>
    </div>
    </div>
  )
}

export default Flex