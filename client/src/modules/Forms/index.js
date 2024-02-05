import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Forms = ({
  isSignInPage=false,
}) => {
  const [data,setData]=useState({
    ...(!isSignInPage && {
      fullName:''
    }),
    email:'',
    password:''
  })
  return (
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
      <div className='text-xl font-light mb-14'>{isSignInPage ? 'Sign in to get started' : 'Sign up now to get started'}</div>
      {!isSignInPage && <Input label='Full Name' name='name' placeholder='Enter Full Name' value={data.fullName} className="mb-6"/>}
      <Input label='Enter Email' name='email' placeholder='Enter Email' value={data.email} className="mb-6"/>
      <Input label='Enter Password' name='password' value={data.password} placeholder='Enter Password' className="mb-6"/>
      <Button label={isSignInPage ? 'Sign in' : 'Sign Up'} className='w-1/2 mb-2'/>
      <div>{isSignInPage ? "Didn't have an account?" :"Already have an account?"} <span className='text-primary cursor-pointer no-underline'>{isSignInPage ? 'Sign in':'Sign up'}</span></div>
    </div>
  )
}

export default Forms
