import { getActivity } from "@/shared/services";
import { getAcountInfo } from "@/shared/services/account.service";
import { cookies } from "next/headers";
import { AccountInfo } from "./components/AccountInfo";
import { MoneyAndPay } from "./components/MoneyAndPay";
import { ActivityInfo } from "./components/ActivityInfo";

const DashboardPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const activities = accountInfo && accessToken ? await getActivity(accountInfo.id, accessToken.value) : null;

    return (
        <div className="space-y-3">
            <section className="">
                <AccountInfo available_amount={accountInfo?.available_amount || 0} />
            </section>
            <MoneyAndPay />
            <ActivityInfo transactions={activities || []} />
        </div>
    )
}

export default DashboardPage