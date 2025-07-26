import React from 'react'
import { AddCardForm } from './components/add-card-form'
import { cookies } from 'next/headers';
import { getAcountInfo, getCards } from '@/shared/services';

const AddPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const cards = accessToken && accountInfo ? await getCards(accountInfo.id, accessToken.value) : [];

    return (
        <>
            {(accountInfo && cards && cards.length < 10) ?
                <AddCardForm userId={accountInfo.id} /> :
                <section className='bg-foreground py-8 px-4 sm:px-8 rounded-lg shadow-md'>
                    <h1 className='text-base pb-2 border-b-surface/30 border-b'>Ya tenés 10 tarjetas asociadas</h1>
                    <p className='mt-4'>Podés eliminar alguna tarjeta para agregar una nueva.</p>
                </section>
            }
        </>
    )
}

export default AddPage