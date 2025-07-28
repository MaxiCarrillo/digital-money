import { getAcountInfo } from '@/shared/services';
import { cookies } from 'next/headers';
import { AliasAndCVUInfo } from '../../profile/components/alias-and-cvu-info';

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