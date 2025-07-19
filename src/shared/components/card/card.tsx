import React, { FC } from 'react'

interface CardProps {
    title: string;
    description: string;
}

export const Card: FC<CardProps> = ({ title, description }) => {
    return (
        <article className='bg-foreground text-background max-w-[500px] rounded-2xl py-8 px-8'>
            <h2 className='font-bold text-3xl sm:text-4xl after:block after:w-full after:h-[2px] after:bg-accent after:my-2'>{title}</h2>
            <p>{description}</p>
        </article>
    )
}
