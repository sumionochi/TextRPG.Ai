"use client"
import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useAction, useQuery } from "convex/react";
import { api } from '../../convex/_generated/api';

type Props = {}

const Dashboardpage = (props: Props) => {
  const handlePlayerAction = useAction(api.chat.handlePlayerAction);
  const entries = useQuery(api.chat.getEntries)
  const [message, setMessage] = useState("");

  return (
    <main className='flex max-w-6xl mx-auto min-h-screen flex-row pt-24 px-4'>
        <div className='flex flex-col w-1/2 gap-3'>
            <div className='bg-secondary p-4 rounded-md overflow-y-auto h-[400px]'>
                {entries?.map(entry=>{
                    return (
                        <div key={entry._id} className='flex flex-col gap-2'>
                            <div>{entry.input}</div>
                            <div className='mb-4'>{entry.response}</div>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handlePlayerAction({message})
                setMessage('');
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