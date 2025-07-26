import React from 'react'
import { MultiStepForm } from './components/multi-step-form'
import { getAcountInfo, getCards } from '@/shared/services';
import { cookies } from 'next/headers';

const DepositCardPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const cards = accessToken && accountInfo ? await getCards(accountInfo.id, accessToken.value) : [];

    return (
        accountInfo && <MultiStepForm cards={cards} accountInfo={accountInfo} />
    )
}

export default DepositCardPage