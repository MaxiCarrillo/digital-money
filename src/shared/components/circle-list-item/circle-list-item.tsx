import CircleIcon from '@/shared/icons/circle';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface CircleListItemProps extends PropsWithChildren {
    rightContent?: ReactNode;
    isPlaceholder?: boolean;
    className?: string;
}

export const CircleListItem: FC<CircleListItemProps> = ({ children, rightContent, isPlaceholder, className }) => {
    return (
        <li className={`border-b border-b-surface/30 py-2 flex items-center justify-between ${className}`}>
            <div className='flex items-center gap-2'>
                <CircleIcon
                    width={32}
                    height={32}
                    className={isPlaceholder ? '[&_circle]:fill-surface/30' : ''}
                />
                <p className='text-sm'>{children}</p>
            </div>
            {rightContent && rightContent}
        </li>
    )
}
