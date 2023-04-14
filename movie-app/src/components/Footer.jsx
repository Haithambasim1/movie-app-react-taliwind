import React from 'react'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (

    <div className='w-full h-[100px] flex items-center justify-between  gap-2 px-28'>
        
        <h2 className=' text-gray-400 text-[20px] text-md'>Made By Haitham Mohasien</h2>
        <div className=' text-gray-400 flex gap-3 cursor-pointer text-[28px]'>
            <a href="https://www.facebook.com/profile.php?id=100005067031965"><TiSocialFacebook /></a> 
            <a className='text-gray' href="https://twitter.com/haithammohasin3"><TiSocialTwitter /></a> 
            <a className='text-gray' href="https://www.instagram.com/haithambm_/"><TiSocialInstagram /></a> 
            <a className='text-gray' href="https://github.com/Haithambasim1"><AiFillGithub /></a>  
        </div>

    </div>
  )
}

export default Footer