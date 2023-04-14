import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { BsSearch } from 'react-icons/bs'
import { MdCopyright } from 'react-icons/md'
import {MdArrowDropDown} from 'react-icons/md'
import {MdArrowDropUp} from 'react-icons/md'

function Header() {

    const[toogel, setToggel]  = useState(false)
  const menu = [
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'Movies'
    },
    {
      id: 3,
      name: 'TV'
    },
    {
      id: 4,
      name: 'Sports'
    },
    {
      id: 5,
      name: 'News'
    },
    {
      id: 6,
      name: 'Hubs'
    },
  ]
  return (

    <div className='flex z-30 justify-between items-center p-4 px-20
    absolute w-full bg-gradient-to-b from-[#1e2126] to-transparent'>
      <div className="logo">
        <img src={logo} alt="logo" className='w-[64px] pb-2 py-2' />{' '}
      </div>
      <ul className=' hidden md:flex gap-8 '>
        {menu.map((item) => {
          return (
            <li
              className='text-white text-[20px] font-medium px-2  hover:bg-gray-300 rounded-md pb-2 py-2 hover:text-gray-700 cursor-pointer transition-all duration-500 ease-in-out'
              key={item.id}
            >
              {item.name}
            </li>
          )
        })}
      </ul>

      <div className='md:hidden'>
        <span onClick={()=>{setToggel(!toogel)}} className='text-gray-400 text-[18px] font-medium px-4 py-2 bg-gray-700 rounded-md hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center gap-1'>
            Home 
            {!toogel ?<MdArrowDropDown className='text-[18px] mt-1'/>:
            <MdArrowDropUp className='text-[18px] mt-1'/>}
            </span>

            {toogel?
            <ul className='absolute bg-gray-900 text-center mt-3 rounded-md w-[250px] left-0 right-0 ml-auto mr-auto'>
                {menu.map((item) => {
                    return (
                        <li
                            className='text-gray-400 text-[18px] font-medium px-2  hover:bg-gray-700 rounded-md pb-2 py-2 hover:text-white cursor-pointer transition-all duration-500 ease-in-out'
                            key={item.id}>{item.name}
                        </li>
                 )
                })}

            </ul>
            :null}
      </div>


      <div className='flex items-center gap-4'>
        <BsSearch className='text-[20px] text-gray-300 hover:text-white cursor-pointer' />
        <MdCopyright
          className='text-[26px] text-gray-300 hover:text-white cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Header
