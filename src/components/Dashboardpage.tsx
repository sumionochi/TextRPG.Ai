"use client"
import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useAction } from "convex/react";
import { api } from '../../convex/_generated/api';

type Props = {}

const Dashboardpage = (props: Props) => {
  const handlePlayerAction = useAction(api.chat.handlePlayerAction);
  const [message, setMessage] = useState("");

  return (
    <main className='flex min-h-screen flex-row pt-24 px-4'>
        <div className='flex flex-col w-1/2'>
            <div className='bg-primary'></div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handlePlayerAction({message})
            }} className='flex flex-row gap-2'> 
                <Input name="message" className='p-1 rounded-md' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <Button>Submit</Button>
            </form>
        </div>
        <div className='w-1/2'></div>
    </main>
  )
}

export default Dashboardpage