import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const ViewNotification = ({ open,setOpen,el,setopen}) => {
    return(
        <>
        <ModalWrapper open={open} setOpen={setopen} >
            <div className="py-4 w-full flex flex-col gap-4 items-center justify-center" >
                <Dialog.Title as='h3' className='font-semibold text-lg'>
                    {el?.task?.title}
                </Dialog.Title>
                <p className="text-start text-gray-500">{el?.text}</p>
                <Button
                type='button'
                className='bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto'
                onClick={() => setOpen(false)}
                label='ok'
                />
            </div>
        </ModalWrapper>
        </>
    )
}

export default ViewNotification