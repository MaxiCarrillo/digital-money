import React from 'react'
import { RegisterForm } from './components/register-form'
import { Navbar, NavbarLink } from '@/shared/components/navbar/navbar'

const links: NavbarLink[] = [
    { href: '/login', label: 'Iniciar sesión', variant: 'button-secondary' },
]

const RegisterPage = () => {
    return (
        <>
            <Navbar variant='accent' links={links} />
            <main className='my-4 px-8'>
                <section className='flex flex-col justify-center gap-4 h-full mx-auto max-w-[800px]'>
                    <RegisterForm />
                </section>
            </main>
        </>
    )
}

export default RegisterPage