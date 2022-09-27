import React from 'react'
import styles from './Header.module.css'
import { RiSearch2Line } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { AiOutlineUser  } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
//IoIosArrowDown
const  Header = ()=>{
  return (
    <div className='bg-primary-gray '>
        <div className='p-3  flex justify-between items-center '>
          <ul className='hidden lg:flex flex-row  justify-between items-center '>
              <li className='mx-6' >جایگاه لوگو </li>
              <li className='m-4' >نمای بازار </li>
              <li className='m-4'> اطلاعات بازار</li>
              <li className='m-4'> وبلاگ</li>
              <li className='m-4'> واچ لیستها</li>
          </ul>
          <div className='flex lg:hidden'>
          {/* <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button"><FiMenu style={{height:25,width:25}}/></label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
              <li className='mx-6' >جایگاه لوگو </li>
              <li className='m-4' >نمای بازار </li>
              <li className='m-4'> اطلاعات بازار</li>
              <li className='m-4'> وبلاگ</li>
              <li className='m-4'> واچ لیستها</li>
          </ul>
          </div>
          </div> */}
          <FiMenu style={{height:25,width:25}}/>
          </div>
          <ul className='flex justify-between items-center'>
              <li  className=' flex justify-between items-center p-2 rounded-lg  bg-secondary-gray'>
                <input  className={`rounded-lg  bg-secondary-gray ${styles.search}`}placeholder='جست و جو' />  
                <RiSearch2Line fill='#a7a7a7' />
              </li>
              <li className='m-2 p-3 rounded-lg bg-secondary-blue'> <BsBell /></li>
              <li className='rounded-lg p-2 bg-third-blue flex justify-center items-center'> 
                <div className=' p-3 rounded-lg bg-secondary-blue flex'><AiOutlineUser /></div>
                <div className="dropdown dropdown-right">
                <label tabindex="0" className='flex justify-center items-center'>
                  <span className='mx-2'>Mohammad...</span>
                  <IoIosArrowDown /> 
                </label>
                <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              </li>
          </ul>
        </div>
       
    </div>
  )
}

export default Header