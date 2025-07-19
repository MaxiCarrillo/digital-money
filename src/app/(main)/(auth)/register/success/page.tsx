import { Navbar } from '@/shared/components/navbar/navbar'
import { SuccessRegistration } from '../components/success-registration'

const SuccessPage = () => {
    return (
        <>
            <Navbar variant='accent' />
            <main>
                <section className='flex flex-col justify-center gap-4 h-full mx-auto max-w-[800px]'>
                    <SuccessRegistration />
                </section>
            </main>
        </>
    )
}

export default SuccessPage