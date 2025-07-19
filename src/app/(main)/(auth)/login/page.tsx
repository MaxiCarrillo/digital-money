import { Navbar } from '@/shared/components/navbar/navbar'
import { MultiStepForm } from './components/multi-step-form'

const LoginPage = () => {
    return (
        <>
            <Navbar variant='accent' />
            <main>
                <MultiStepForm />
            </main>
        </>
    )
}

export default LoginPage