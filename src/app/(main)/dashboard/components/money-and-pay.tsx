import Link from 'next/link'
import React from 'react'

export const MoneyAndPay = () => {
    return (
        <section className='flex flex-col sm:flex-row gap-4'>
            <Link href="/dashboard/deposit" className="w-full py-6 bg-accent rounded-md text-background text-center font-bold shadow-md">Ingresar dinero</Link>
            <Link href="/dashboard/payments" className="w-full py-6 bg-accent rounded-md text-background text-center font-bold shadow-md">Pago de servicios</Link>
        </section>
    )
}
