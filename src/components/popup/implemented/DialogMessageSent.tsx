"use client"
import React from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/popup/Dialog";


const DialogMessageSent: React.FC<
    {
    open : boolean;
    setOpen : (open: boolean) => void;
    }
> = ( {open, setOpen} ) => {
    return (
        <AlertDialog open={open} >  
        <AlertDialogContent className='bg-rainyGray'>
          <AlertDialogHeader>
            <AlertDialogTitle>Thank you for your message!</AlertDialogTitle>
            <AlertDialogDescription>
              I will get back to you as soon as possible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
                <button onClick={() => {setOpen (false)}}  type='button' className="button">
                  <span className="text">Accept</span>
                </button>
          </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    );
};

export default DialogMessageSent;