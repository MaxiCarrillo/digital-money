import React from 'react'
import { AliasAndCVUInfo } from '../../profile/components/alias-and-cvu-info'
import { cookies } from 'next/headers';
import { getAcountInfo, getUserInfo } from '@/shared/services';

const BankPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;

    return (
        <section>
            {accountInfo && <AliasAndCVUInfo cvu={accountInfo?.cvu} alias={accountInfo?.alias} />}
        </section>
    )
}

export default BankPage