import { ServiceType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useFilterPayments = (services?: ServiceType[]) => {

    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        setSearchTerm(searchParams.get('search'));
    }, [searchParams]);

    const updateSearch = (search: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (search && search.trim() !== '') {
            params.set('search', search);
            setSearchTerm(search);
        } else {
            params.delete('search');
            setSearchTerm(null);
        }
        router.push(`/dashboard/payments?${params.toString()}`);
    };

    const filteredServices = services?.filter((service) =>
        service.name.toLowerCase().includes((searchTerm ?? "").toLowerCase())
    );

    return { searchTerm, setSearchTerm, filteredServices, updateSearch };
};
