import ArrowIcon from '@/shared/icons/arrow'
import Link from 'next/link'
import React from 'react'
import { AliasAndCVUInfo } from './components/AliasAndCVUInfo'
import { EditProfileData } from './components/EditProfileData'
import { cookies } from 'next/headers'
import { getAcountInfo, getUserInfo } from '@/shared/services'

const ProfilePage = async () => {

  const accessToken = (await cookies()).get('acc_token');
  const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
  const userInfo = accessToken && accountInfo ? await getUserInfo(accountInfo.user_id, accessToken.value) : null;

  return (
    <>
      <section>
        {(userInfo && accountInfo?.user_id) && (
          <EditProfileData userId={accountInfo.user_id} userInfo={userInfo} />
        )}
      </section>
      <section>
        <Link href='/dashboard/cards' className='bg-accent text-xl p-8 mt-4 flex items-center justify-between font-bold hover:[&_svg]:translate-x-1 rounded-lg shadow-md'>
          <span>Gestioná los medios de pago</span>
          <ArrowIcon className='[&_path]:fill-background transition' height={20} />
        </Link>
      </section>
      <section>
        {accountInfo && <AliasAndCVUInfo cvu={accountInfo?.cvu} alias={accountInfo?.alias} />}
      </section>
    </>
  )
}

export default ProfilePage