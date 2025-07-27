import { getAcountInfo, getActivity } from '@/shared/services';
import { cookies } from 'next/headers';
import { ActivityList } from './components/activity-list';
import { ActivityFilter } from './components/filter';
import { TransactionType } from '@/types';

// const activitiesTest: TransactionType[] = [
//   {
//     id: 1001,
//     account_id: 901,
//     type: "Deposit",
//     description: "Depósito en efectivo",
//     origin: "Cajero automático",
//     destination: "Cuenta personal",
//     amount: 12000,
//     dated: "2025-07-25T08:30:00.00Z"
//   },
//   {
//     id: 1002,
//     account_id: 902,
//     type: "Withdrawal",
//     description: "Extracción en sucursal",
//     origin: "Cuenta personal",
//     destination: "Efectivo",
//     amount: 3000,
//     dated: "2025-07-24T14:45:00.00Z"
//   },
//   {
//     id: 1003,
//     account_id: 903,
//     type: "Transfer",
//     description: "Transferencia a cuenta ahorro",
//     origin: "Cuenta corriente",
//     destination: "Caja de ahorro",
//     amount: 5000,
//     dated: "2025-07-23T16:10:00.00Z"
//   },
//   {
//     id: 1004,
//     account_id: 904,
//     type: "Payment",
//     description: "Pago de tarjeta de crédito",
//     origin: "Cuenta personal",
//     destination: "Visa",
//     amount: 15000,
//     dated: "2025-07-22T10:15:00.00Z"
//   },
//   {
//     id: 1005,
//     account_id: 905,
//     type: "Deposit",
//     description: "Depósito transferencia externa",
//     origin: "MercadoPago",
//     destination: "Cuenta bancaria",
//     amount: 18000,
//     dated: "2025-07-21T09:00:00.00Z"
//   },
//   {
//     id: 1006,
//     account_id: 906,
//     type: "Transfer",
//     description: "Transferencia a cuenta de ahorro",
//     origin: "Cuenta principal",
//     destination: "Cuenta de inversión",
//     amount: 7000,
//     dated: "2025-07-20T17:30:00.00Z"
//   },
//   {
//     id: 1007,
//     account_id: 907,
//     type: "Withdrawal",
//     description: "Extracción en cajero Banelco",
//     origin: "Cuenta corriente",
//     destination: "Efectivo",
//     amount: 2500,
//     dated: "2025-07-19T13:20:00.00Z"
//   },
//   {
//     id: 1008,
//     account_id: 908,
//     type: "Deposit",
//     description: "Depósito sueldo",
//     origin: "Empresa X",
//     destination: "Cuenta sueldo",
//     amount: 200000,
//     dated: "2025-07-18T12:00:00.00Z"
//   },
//   {
//     id: 1009,
//     account_id: 909,
//     type: "Payment",
//     description: "Pago de servicios",
//     origin: "Cuenta bancaria",
//     destination: "EDESUR",
//     amount: 8200,
//     dated: "2025-07-17T09:10:00.00Z"
//   },
//   {
//     id: 1010,
//     account_id: 910,
//     type: "Transfer",
//     description: "Transferencia a familiar",
//     origin: "Cuenta personal",
//     destination: "Cuenta de Juan",
//     amount: 10000,
//     dated: "2025-07-16T19:00:00.00Z"
//   },
//   {
//     id: 1011,
//     account_id: 911,
//     type: "Deposit",
//     description: "Devolución de compra",
//     origin: "MercadoLibre",
//     destination: "Cuenta bancaria",
//     amount: 4000,
//     dated: "2025-07-15T11:45:00.00Z"
//   },
//   {
//     id: 1012,
//     account_id: 912,
//     type: "Payment",
//     description: "Pago de internet",
//     origin: "Cuenta corriente",
//     destination: "Fibertel",
//     amount: 6500,
//     dated: "2025-07-14T08:30:00.00Z"
//   },
//   {
//     id: 1013,
//     account_id: 913,
//     type: "Deposit",
//     description: "Transferencia de fondos",
//     origin: "Cuenta PayPal",
//     destination: "Cuenta bancaria",
//     amount: 12300,
//     dated: "2025-07-13T10:05:00.00Z"
//   },
//   {
//     id: 1014,
//     account_id: 914,
//     type: "Withdrawal",
//     description: "Extracción por ventanilla",
//     origin: "Cuenta ahorro",
//     destination: "Efectivo",
//     amount: 9000,
//     dated: "2025-07-12T14:20:00.00Z"
//   },
//   {
//     id: 1015,
//     account_id: 915,
//     type: "Payment",
//     description: "Pago de abono celular",
//     origin: "Cuenta bancaria",
//     destination: "Claro",
//     amount: 3100,
//     dated: "2025-07-11T15:45:00.00Z"
//   },
//   {
//     id: 1016,
//     account_id: 916,
//     type: "Transfer",
//     description: "Envío de dinero a cuenta secundaria",
//     origin: "Cuenta principal",
//     destination: "Cuenta secundaria",
//     amount: 6000,
//     dated: "2025-07-10T10:00:00.00Z"
//   },
//   {
//     id: 1017,
//     account_id: 917,
//     type: "Deposit",
//     description: "Ingreso por venta",
//     origin: "Cliente particular",
//     destination: "Cuenta negocios",
//     amount: 15700,
//     dated: "2025-07-09T09:30:00.00Z"
//   }
// ];

const ActivityPage = async () => {

    const accessToken = (await cookies()).get('acc_token');
    const accountInfo = accessToken ? await getAcountInfo(accessToken.value) : null;
    const activities = accountInfo && accessToken ? await getActivity(accountInfo.id, accessToken.value) : null;

    return (
        <>
            <section className='w-full'>
                <ActivityFilter />
            </section>
            <ActivityList transactions={activities || []} />
        </>
    )
}

export default ActivityPage

