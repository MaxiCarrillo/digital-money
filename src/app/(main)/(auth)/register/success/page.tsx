import { Navbar } from '@/shared/components/navbar/navbar'
import { SuccessRegistration } from '../components/success-registration'

const SuccessPage = () => {
    return (
        <>
            <Navbar variant='accent' />
            <main>
                <SuccessRegistration />
            </main>
        </>
    )
}

export default SuccessPage