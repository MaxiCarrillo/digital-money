import { getAcountInfo, getDetailedActivity } from '@/shared/services';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Detail } from './components/detail';

interface DetailActivityPageProps {
    params: Promise<{ id: string }>;
}

interface DetailActivityPageProps {
    params: Promise<{ id: string }>;
}

const DetailActivityPage = async ({ params }: DetailActivityPageProps) => {
    const { id } = await params;

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const detailActivity = accountInfo && accessToken ? await getDetailedActivity(accountInfo.id, parseInt(id), accessToken.value) : null;

    return (
        <>
            <section>
                {detailActivity && <Detail detailActivity={detailActivity} />}
            </section>
            <section className='flex justify-end gap-4 mt-4'>
                <Link href='/dashboard' className='block button button-secondary bg-background/10 text-background w-full max-w-48 py-3'>Ir al Inicio</Link>
                <button className='block button w-full max-w-56 py-3'>Descargar comprobante</button>
            </section>
        </>
    )
}

export default DetailActivityPage