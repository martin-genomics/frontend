'use client'

import { UserType } from "@/types/user";
import { Button, Dialog, DialogBody, DialogHeader, Input, Typography } from "@material-tailwind/react";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { APIForm } from "@/plugins/forms";
import VerificationInput from 'react-verification-input'
type EditProfileModalProps = {
    setModalOpen: (state: boolean) => void;
    isOpen: boolean;
    user: UserType;
}

type EditProfileFormType = {
    firstName: string;
    lastName: string;
    email: string;
}

export default function EditProfileModal({ setModalOpen, isOpen, user }: EditProfileModalProps) {
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isEmailUpdate, setEmailUpdate] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [updateMesssage, setUpdateMessage] = useState<string>('')
    const [emailBtnClicked, setEmailClicked] = useState<boolean>(false);
    const [otp, setOtp] = useState<string | null>(null);

    const {
        handleSubmit,
        register,
        watch,
    } = useForm<EditProfileFormType>()
    
    const formWatch = watch()
    
    useEffect(()=> {
        if(formWatch.email)
            if(validator.isEmail(formWatch.email) && formWatch.email.length > 0) {
                setEmailUpdate(true);
                setIsEmailError(false);
            } else if(formWatch.email.length > 1 && validator.isEmail(formWatch.email) === false) {
                setEmailUpdate(true);
                setIsEmailError(true)
                
            } else if(formWatch.email.length <= 1 ) {
                setEmailUpdate(false);
                setIsEmailError(false);
                
            }
            
            formWatch.email === user.email? (()=> { setEmailUpdate(false); setIsEmailError(false); })(): null;

    }, [formWatch.email])

    const submitForm = async (editForm: EditProfileFormType) => {
        setIsLoading(true);

        try{
            const response = await APIForm.updateUser(editForm);
            setIsLoading(false);
            setUpdateMessage(response)
            
        } catch(error) {
            setUpdateMessage(error as string)
            setIsLoading(false);
        }
        setIsLoading(false);

    }

    const submitEmailUpdate = async () => {
        if(validator.isEmail(formWatch.email)){
            const data = { email: formWatch.email, otp: otp }
            setIsLoading(true)
            try{
                const message = await APIForm.updateUserEmail(data);
                console.log('response: ',message)
                setEmailClicked(true);

            } catch(error) {
                console.log('response: ',error)
                setIsLoading(false)

            }
        }
    } 


    return (
        <div>
            <Dialog size='sm' open={isOpen} handler={()=> setModalOpen(false)}>
                <DialogHeader>
                    <Typography variant='h6'>
                        Edit Profile
                    </Typography>
                </DialogHeader>
                <DialogBody>
                    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-2 items-end">
                        <Input defaultValue={user.firstName} type="text" {...register('firstName', { required: false})}  size='lg' label="First Name" />
                        <Input defaultValue={user.lastName} type="text" {...register('lastName', { required: false})}  size='lg' label="Last Name" />
                        <Input defaultValue={user.email} type="email" error={isEmailError} {...register('email', { required: false})} size='lg' label="Email" />
                        {
                            isEmailUpdate?
                            <span className="w-full flex gap-5">
                                <VerificationInput 
                                    classNames={{
                                        container: 'border mx-auto',
                                        character: 'text-primary text-[20pt]  border-2 border-primary rounded-md w-[30px] ',
                                        characterFilled: 'border-2 border-primary rounded-md w-[30px]'
                                    }} />

                                <Button loading={isLoading} onClick={submitEmailUpdate} disabled={isEmailError}  size="sm" className="w-3/6  normal-case rounded-md bg-primary">
                                    { emailBtnClicked? 'send code': 'receive code'}
                                </Button>
                            </span>
                            :
                            
                            <Button loading={isLoading} type="submit" disabled={isEmailError}  size="sm" className="w-2/6 normal-case rounded-md bg-primary">
                                Update Profile
                            </Button>
                        }
                        <span className="block text-green-500 font-body text-sm ">
                            {updateMesssage}
                        </span>

                    </form>
                </DialogBody>

            </Dialog>
        </div>
    )
}