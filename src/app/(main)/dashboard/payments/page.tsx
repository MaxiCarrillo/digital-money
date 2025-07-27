import { getService } from '@/shared/services';
import { PaymentFilter } from './components/filter'
import { PaymentList } from './components/payment-list'

const PaymentsPage = async () => {

    const services = await getService();

    return (
        <>
            <section className='w-full'>
                <PaymentFilter />
            </section>
            <PaymentList services={services} />
        </>
    )
}

export default PaymentsPage