import { getActivity } from "@/shared/services";
import { getAcountInfo } from "@/shared/services/account.service";
import { cookies } from "next/headers";
import { AccountInfo } from "./components/account-info";
import { MoneyAndPay } from "./components/money-and-pay";
import { ActivityInfo } from "./components/activity-info";

const DashboardPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const activities = accountInfo && accessToken ? await getActivity(accountInfo.id, accessToken.value) : null;

    const filteredActivities = activities?.slice(0, 10);

    return (
        <>
            <section className="">
                <AccountInfo available_amount={accountInfo?.available_amount || 0} />
            </section>
            <MoneyAndPay />
            <ActivityInfo transactions={filteredActivities || []} />
        </>
    )
}

export default DashboardPage