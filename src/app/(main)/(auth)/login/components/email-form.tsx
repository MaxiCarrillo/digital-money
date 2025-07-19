"use client"

import Link from 'next/link'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { LoginFormData } from './multi-step-form'

interface EmailFormProps {
    form: UseFormReturn<LoginFormData>;
    onSubmit: () => void;
}

export const EmailForm: FC<EmailFormProps> = ({ onSubmit, form }) => {

    return (
        <>
            <h1 className='text-center text-xl my-4'>¡Hola! Ingresá tu e-mail</h1>
            <form className='flex flex-col gap-4' onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email" hidden>E-mail</label>
                    <input
                        className={form.formState.errors.email && 'ring-red-500'}
                        type="email"
                        id="email"
                        placeholder="Correo electrónico*"
                        {...form.register("email")}
                        required
                    />
                    {form.formState.errors.email && (
                        <p className='text-red-500 italic'>{form.formState.errors.email.message}</p>
                    )}
                </div>
                <button type="submit" className="button">Continuar</button>
                <Link href="/register" className="button-outline">Crear cuenta</Link>
            </form>
        </>
    )
}
