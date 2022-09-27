import React, { useEffect } from 'react'
import Image from 'next/image';
import { Bar } from 'react-chartjs-2';
//IoMdArrowDropdown
import { IoMdArrowDropdown } from "react-icons/io";
import { data , options , plugins} from '../BarChart/BARCHARTDATA'
import QKC_LOGO from '../../../images/quarkchain-qkc-logo.png'
import BNB_LOGO from '../../../images/bnb.png'
import WAVES_LOGO from '../../../images/Cjdowner-Cryptocurrency-Flat-Waves.ico'
import Fear_Gread from '../../../images/fear and gread.png'
import styles from './Home.module.css'
const  Home = ()=>{
  
  return (
    <>
    <div className='cu-navbar flex flex-col lg:flex-row justify-between items-center bg-primary-gray p-1 m-3 rounded-lg'>
        <div  className='flex flex-col lg:flex-row justify-between items-center '>
            <div className='flex justify-center items-center mx-4 '>
                <span className='m-2 text-center'>انتخاب زنجیره</span>
                <span className='rounded-full bg-secondary-blue py-1 px-3 text-xs'>1</span>
            </div>
            <ul className='flex justify-between items-center p-1 bg-black rounded-lg '>
                <li className='btn-primary bg-secondary-blue py-2 px-6 rounded-lg' >اتریوم</li>
                <li className='p-4'>بایننس</li>
                <li className='p-4'>فانتوم</li>
                <li className='p-4'>پولیگان</li>
                <li className='p-4'>اولانتر</li>
            </ul>
        </div>
        <div  className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex justify-center items-center mx-4'>
                <span className='m-2 text-center'>تعداد والها</span>
                <span className='rounded-full bg-secondary-blue py-1 px-3 text-xs'>1</span>
            </div>
            <ul className='flex justify-between items-center py-1 px-2 bg-black rounded-lg'>
                <li className='btn-primary bg-primary-blue py-2 px-2 rounded-lg'>100</li>
                <li className='p-4'>500</li>
                <li className='p-4'>1000</li>
                <li className='p-4'>2000</li>
                <li className='p-4'>4000</li>
            </ul>
        </div>
    </div>
    <div className='flex flex-col lg:flex-row '>
        <div className='m-3 p-4 bg-primary-gray rounded-lg grow'>
            <div className='m-2 flex'>
                <h1 className='m-1 text-center'>حجم والهای خریدار وفروشنده</h1>
                <span className='rounded-full bg-secondary-blue py-1 px-3 text-xs'>1</span>
            </div>
            <div className='flex'>
                <div className='w-6/12 h-8 bg-primary-green rounded-sm'></div>
                <span className='w-2'></span>
                <div className='w-6/12 h-8 bg-primary-red rounded-sm'></div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex flex-col justify-between items-center'> 
                    <div className='bg-secondary-green text-primary-green rounded-lg p-1 my-3'>121m</div>
                    <div>خرید</div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='bg-secondary-red text-primary-red rounded-lg p-1 my-3'>120m</div>
                    <div>فروش</div>
                </div>
            </div>
        </div>
        <div className='m-3 p-4 bg-primary-gray rounded-lg grow'>
            <div className='m-2 flex'>
                <h1 className='m-1 text-center'> والهای خریدار و فروشنده</h1>
                <span className='rounded-full bg-secondary-blue py-1 px-3 text-xs'>1</span>
            </div>
            <div className='flex'>
                <div className='w-6/12 h-8 bg-primary-green rounded-sm'></div>
                <span className='w-2'></span>
                <div className='w-6/12 h-8 bg-primary-red rounded-sm'></div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex flex-col justify-between items-center'> 
                    <div className='bg-secondary-green text-primary-green rounded-lg p-1 my-3'>75</div>
                    <div>خریداران</div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='bg-secondary-red text-primary-red rounded-lg p-1 my-3'>21</div>
                    <div>فروشندکان</div>
                </div>
            </div>
        </div>
        <div className='m-3  p-4 bg-primary-gray rounded-lg grow'>
            <h1 className='text-center'>شاخص طرس و طمع</h1>
            <div className={`${styles.fear_gread} fear_gread`}>
                <span className='mt-5 text-4xl'>58</span>
                <span className='m-2'>وضعیت فعلی:طمع</span>
                <span className={styles.arrow_container} >  
                    <IoMdArrowDropdown style={{width:45,height:45,position:'absolute',top:0,left:100,transform:`rotate(0deg)`}}/>
                </span>
                <div className={styles.chart}> <Image  src={Fear_Gread} alt='fear and gread chart'/></div>
              
            </div>
        </div>
       
    </div>
     <div className='flex flex-col lg:flex-row'>
        <div className='m-3  p-4 bg-primary-gray rounded-lg flex flex-col lg:w-2/3 '>
            <h1 className='mx-2 my-4 text-2xl text-white'>چارت تراکنش ها</h1>
            <div className='bg-black p-3 rounded-lg'>
            <Bar
                options={options}
                data={data}
                plugins={plugins}
            />
            </div>
        </div>
        <div className='flex flex-col  lg:w-1/3'>
            <div className='m-3  p-4 bg-primary-gray rounded-lg grow '>
                <h1 className='my-3'>توکن با بیشترین معامله</h1>
                <h2 className='text-2xl text-white flex items-center'>
                    <Image  src={QKC_LOGO}  alt='quarkchain(QKC)' width={32}  height={32}/>
                    <span className='mx-1'>quarkchain(QKC) </span>
                </h2>
            </div>
            <div className='m-3  p-4 bg-primary-gray rounded-lg grow'>
                <h1 className='my-3'>توکن با بیشترین معامله</h1>
                <h2 className='text-2xl text-white flex items-center'>
                    <Image  src={WAVES_LOGO}  alt='quarkchain(QKC)' width={32}  height={32}/>
                    <span className='mx-1'>Waves(WAVES) </span>
                </h2>
            </div>
            <div className='m-3  p-4 bg-primary-gray rounded-lg grow'>
                <h1 className='my-3'>توکن با بیشترین معامله</h1>
                <h2 className='text-2xl text-white flex items-center'>
                    <Image  src={BNB_LOGO}  alt='quarkchain(QKC)' width={32}  height={32}/>
                    <span className='mx-1'>Binance Coin(BNB) </span>
                </h2>
            </div>
        </div>
     </div>
    </>
  ) 
}

export default Home