"use client"

import { deleteCookie } from "@/shared/utils/cookieClient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DashboardPage = () => {

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('acc_token');
        deleteCookie('acc_token');
        router.push('/');
        toast.success("Sesión cerrada exitosamente.");
    }

    return (
        <div>
            <button className='button' onClick={handleLogout}>Cerrar sesión</button>
        </div>
    )
}

export default DashboardPage