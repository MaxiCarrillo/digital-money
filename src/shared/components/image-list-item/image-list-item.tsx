import Image from 'next/image';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface ImageListItem extends PropsWithChildren {
    src: string;
    alt: string;
    rightContent?: ReactNode;
    className?: string;
}

export const ImageListItem: FC<ImageListItem> = ({ children, rightContent, className, src, alt }) => {
    return (
        <li className={`border-b border-b-surface/30 py-2 flex items-center justify-between ${className}`}>
            <div className='flex items-center gap-2'>
                <Image
                    src={src}
                    alt={alt}
                    className='aspect-video object-contain w-16 h-8'
                    width={64}
                    height={32}
                />
                <p className='text-sm'>{children}</p>
            </div>
            {rightContent && rightContent}
        </li>
    )
}
