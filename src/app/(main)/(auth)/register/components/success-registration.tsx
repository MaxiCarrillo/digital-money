import CheckIcon from '@/shared/icons/check'
import Link from 'next/link'
import React from 'react'

export const SuccessRegistration = () => {
    return (
        <section className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-5xl'>Registro Exitoso</h1>
            <CheckIcon />
            <p className='text-center max-w-xl'>Hemos enviado un correo de confirmación para validar tu email, por favor revisalo para iniciar sesión</p>
            <Link href="/login" className='button max-w-[300px] w-full py-3'>Continuar</Link>
        </section>
    )
}
