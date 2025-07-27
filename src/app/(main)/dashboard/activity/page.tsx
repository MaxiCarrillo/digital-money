import { getAcountInfo, getActivity } from '@/shared/services';
import { cookies } from 'next/headers';
import { ActivityList } from './components/activity-list';
import { ActivityFilter } from './components/filter';
import { compareDesc } from 'date-fns';


const ActivityPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const activities = accountInfo && accessToken ? await getActivity(accountInfo.id, accessToken.value) : null;

    const filteredActivities = activities
        ?.sort((a, b) => compareDesc(new Date(a.dated), new Date(b.dated)))

    return (
        <>
            <section className='w-full'>
                <ActivityFilter />
            </section>
            <ActivityList transactions={filteredActivities || []} />
        </>
    )
}

export default ActivityPage

