import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const Enquiry = () => {
  return (
    <div>
        <div className='font-bold text-center text-2xl text-blue-600 py-6 '>User Enquiry</div>
        <div className='grid grid-cols-[30%_auto]'>
            <div className='bg-gray-200 p-4'>
                <h2 className='text-[20px] font-bold'>Enquiry Form</h2>
                <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
                </form>
            </div>
            
        </div>


    </div>
  )
}

export default Enquiry