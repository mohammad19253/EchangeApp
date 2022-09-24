import React from 'react'

const  Header = ()=>{
  return (
    <div>
        <div className='p-3  flex justify-between'>
          <ul className='flex'>
              <li className='m-4' >نمای بازار </li>
              <li className='m-4'> اطلاعات بازار</li>
              <li className='m-4'> وبلاگ</li>
              <li className='m-4'> واچ لیستها</li>
          </ul>
          <ul className='flex'>
              <li className='m-4' >
                <input  className='search' placeholder='جست و جو'/>  
              </li>
              <li className='m-4'> اطلاعات بازار</li>
              <li className='m-4'> وبلاگ</li>
              <li className='m-4'> واچ لیستها</li>
          </ul>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header