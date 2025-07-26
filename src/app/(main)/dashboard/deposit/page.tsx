import { ArrowIcon, CardIcon, UserIcon } from '@/shared/icons'
import Link from 'next/link'

const DepositPage = () => {
    return (
        <>
            <section>
                <Link href='/dashboard/deposit/bank' className='block bg-background text-foreground text-xl p-16 w-full font-bold rounded-lg shadow-md hover:[&>div>svg]:translate-x-1 transition'>
                    <div className='flex items-center justify-between text-accent'>
                        <h1 className='text-xl flex items-center gap-2'><CardIcon /> Transferencia bancaria</h1>
                        <ArrowIcon className='[&_path]:fill-accent transition' height={20} />
                    </div>
                </Link>
            </section>
            <section>
                <Link href='/dashboard/deposit/card' className='block bg-background text-foreground text-xl p-16 w-full font-bold rounded-lg shadow-md hover:[&>div>svg]:translate-x-1 transition'>
                    <div className='flex items-center justify-between text-accent'>
                        <h1 className='text-xl flex items-center gap-2 '><UserIcon /> Seleccionar tarjeta</h1>
                        <ArrowIcon className='[&_path]:fill-accent transition' height={20} />
                    </div>
                </Link>
            </section>
        </>
    )
}

export default DepositPage