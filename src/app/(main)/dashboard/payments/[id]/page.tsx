import { getAcountInfo, getCards, getServiceById } from "@/shared/services";
import { cookies } from "next/headers";
import { MultiStepForm } from "./components/multi-step-form";

interface PaymentPageProps {
    params: Promise<{ id: string }>;
}

const PaymentPage = async ({ params }: PaymentPageProps) => {

    const { id } = await params;

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const service = await getServiceById(id);
    const cards = accessToken && accountInfo ? await getCards(accountInfo.id, accessToken.value) : [];

    return (
        accessToken && accountInfo && service && <MultiStepForm
            accountInfo={accountInfo}
            service={service}
            cards={cards}
        />
    )
}

export default PaymentPage