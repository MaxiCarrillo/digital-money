import { TransactionType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    isToday,
    isYesterday,
    isWithinInterval,
    subDays,
    subMonths,
    subYears,
    startOfDay
} from "date-fns";

interface FilterState {
    search: string | null;
    periodOption: string | null;
}


enum Period {
    TODAY = 'today',
    YESTERDAY = 'yesterday',
    LAST_WEEK = 'last_week',
    LAST_15_DAYS = 'last_15_days',
    LAST_MONTH = 'last_month',
    LAST_YEAR = 'last_year'
}

export const PERIOD_OPTIONS = [
    { label: 'Hoy', value: Period.TODAY },
    { label: 'Ayer', value: Period.YESTERDAY },
    { label: 'Ultima semana', value: Period.LAST_WEEK },
    { label: 'Ultimos 15 días', value: Period.LAST_15_DAYS },
    { label: 'Ultimo mes', value: Period.LAST_MONTH },
    { label: 'Ultimo año', value: Period.LAST_YEAR }
]

const isInPeriod = (transactionDate: string | Date, period: Period): boolean => {
    const transDate = new Date(transactionDate);
    const now = new Date();

    const periodChecks = {
        [Period.TODAY]: isToday(transDate),
        [Period.YESTERDAY]: isYesterday(transDate),
        [Period.LAST_WEEK]: isWithinInterval(transDate, {
            start: startOfDay(subDays(now, 7)),
            end: now
        }),
        [Period.LAST_15_DAYS]: isWithinInterval(transDate, {
            start: startOfDay(subDays(now, 15)),
            end: now
        }),
        [Period.LAST_MONTH]: isWithinInterval(transDate, {
            start: startOfDay(subMonths(now, 1)),
            end: now
        }),
        [Period.LAST_YEAR]: isWithinInterval(transDate, {
            start: startOfDay(subYears(now, 1)),
            end: now
        })
    }

    return periodChecks[period] ?? false;
};

export const useFilterActivity = (
    transactions?: TransactionType[]
) => {

    const [filters, setFilters] = useState<FilterState>({
        search: null,
        periodOption: null
    });

    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const search = searchParams.get('search');
        const period = searchParams.get('period');

        setFilters((prev) => ({
            search: search || null,
            periodOption: period || null
        }));
    }, [searchParams]);

    const updateSearch = (search: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (search && search.trim() !== '') {
            params.set('search', search);
            setFilters({ ...filters, search });
        } else {
            params.delete('search');
            setFilters({ ...filters, search: null });
        }
        router.push(`/dashboard/activity?${params.toString()}`);
    }

    const updatePeriod = (period: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (period) {
            params.set('period', period);
            setFilters({ ...filters, periodOption: period });
        } else {
            params.delete('period');
            setFilters({ ...filters, periodOption: null });
        }
        router.push(`/dashboard/activity?${params.toString()}`);
    }

    const clearFilter = () => {
        setFilters({ search: null, periodOption: null });
        router.push(`/dashboard/activity`);
    };

    const filteredTransactions = transactions?.filter(transaction => {
        let passesFilter = true;

        // Filtro por búsqueda
        if (filters.search && filters.search.trim() !== '') {
            const searchTerm = filters.search.toLowerCase();
            const description = transaction.description?.toLowerCase() || '';
            passesFilter = description.includes(searchTerm);
        }

        // Filtro por período (solo si pasa el filtro de búsqueda)
        if (passesFilter && filters.periodOption) {
            passesFilter = isInPeriod(transaction.dated, filters.periodOption as Period);
        }

        return passesFilter;
    });

    return { searchParams, filters, clearFilter, updateSearch, updatePeriod, filteredTransactions };
}
