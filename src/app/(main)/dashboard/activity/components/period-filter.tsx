"use client"

import React, { useEffect } from 'react';
import { PERIOD_OPTIONS, useFilterActivity } from '../hooks/use-filter-activity';

export const PeriodFilter = () => {

    const { clearFilter, filters, updatePeriod } = useFilterActivity();

    const [selectedPeriod, setSelectedPeriod] = React.useState<string | null>(filters.periodOption);

    useEffect(() => {
        setSelectedPeriod(filters.periodOption);
    }, [filters.periodOption]);

    const handlePeriodChange = (period: string | null) => {
        setSelectedPeriod(period);
    }

    const updateSelectedPeriod = () => {
        updatePeriod(selectedPeriod);
    }

    const handleClearFilter = () => {
        setSelectedPeriod(null);
        clearFilter();
    }

    return (
        <article className='absolute -bottom-[360px] right-0 w-[280px] sm:w-[300px] bg-foreground py-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10 space-y-3'>
            <div className='flex items-center justify-between border-b border-background/30 px-4 pb-2'>
                <p className='font-bold'>Período</p>
                <button className='text-background/60 cursor-pointer' onClick={handleClearFilter}>Borrar filtros</button>
            </div>
            <div className='px-4 space-y-4'>
                {PERIOD_OPTIONS.map((option) => (
                    <label key={option.value} className='flex items-center justify-between'>
                        <span className='text-background/80'>{option.label}</span>
                        <input
                            type="radio"
                            name='period'
                            className='bg-accent border-accent ring-0 accent-background w-4 h-4 relative checked:before:block checked:before:absolute checked:before:rounded-full checked:before:bg-accent checked:before:w-full checked:before:h-full checked:before:outline checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:bg-background checked:after:w-[10px] checked:after:h-[10px] checked:after:rounded-full checked:after:-translate-x-1/2 checked:after:-translate-y-1/2'
                            value={option.value}
                            checked={selectedPeriod === option.value}
                            onChange={() => handlePeriodChange(option.value)}
                        />
                    </label>
                ))}
            </div>
            <div className='flex px-4'>
                <button className='button rounded-full w-full' onClick={updateSelectedPeriod}>Aplicar</button>
            </div>
        </article>
    )
}
