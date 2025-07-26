import ArrowIcon from '@/shared/icons/arrow'
import PlusIcon from '@/shared/icons/plus'
import { getAcountInfo, getCards } from '@/shared/services'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { CardList } from './components/card-list'

const CardsPage = async () => {

  const accessToken = (await cookies()).get('acc_token');
  const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
  const cards = accessToken && accountInfo ? await getCards(accountInfo.id, accessToken.value) : [];

  return (
    <>
      <section>
        <Link href='/dashboard/cards/add' className='block bg-background text-foreground text-xl p-8 w-full font-bold rounded-lg shadow-md hover:[&>div>svg]:translate-x-1 transition'>
          <h1 className='text-base'>Agregá tu tarjeta de débito o crédito</h1>
          <div className='flex items-center justify-between mt-8 text-accent'>
            <p className='text-xl flex gap-2'><PlusIcon /> Nueva tarjeta</p>
            <ArrowIcon className='[&_path]:fill-accent transition' height={20} />
          </div>
        </Link>
      </section>
      {accountInfo && (<CardList cards={cards || []} idUser={accountInfo.id} />)}
    </>
  )
}

export default CardsPage