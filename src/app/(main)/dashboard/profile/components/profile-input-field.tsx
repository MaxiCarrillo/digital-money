import PencilIcon from "@/shared/icons/pencil";
import { Dispatch, FC, KeyboardEvent, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

interface ProfileInputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    form: UseFormReturn<any>;
    fieldName: string;
    label: string;
    isEditing: boolean;
    setIsEditing: Dispatch<SetStateAction<Record<string, boolean>>>;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    disabled?: boolean;
}

export const ProfileInputField: FC<ProfileInputFieldProps> = ({ form, fieldName, label, isEditing, setIsEditing, onKeyDown, type, placeholder, disabled, ...props }) => {

    const handleOnChange = () => {
        setIsEditing((prev) => {
            const newState = {
                ...prev,
                [fieldName]: !prev[fieldName]
            };

            // Si se está activando el modo edición, enfocar el campo
            if (!prev[fieldName]) {
                setTimeout(() => form.setFocus(fieldName), 0);
            }

            return newState;
        });
    }

    return (
        <div className='flex flex-col sm:flex-row gap-0 sm:gap-2 border-b border-surface/30 py-1'>
            <label htmlFor={fieldName} className='sm:basis-24'>{label}</label>
            <div className='flex gap-2 w-full justify-between'>
                <input
                    type={type || 'text'}
                    id={fieldName}
                    onKeyDown={onKeyDown}
                    autoFocus={isEditing}
                    {...form.register(fieldName)}
                    className='p-0 w-full rounded-none bg-transparent ring-0 [&:disabled]:text-background/50'
                    placeholder={placeholder}
                    disabled={!isEditing}
                    {...props}
                />
                <button type='button' onClick={handleOnChange} className={`${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} disabled={disabled}>
                    <PencilIcon
                        height={20}
                        className={`${isEditing ? '[&>path]:fill-surface' : '[&>path]:fill-surface/50'} transition`}
                    />
                </button>
            </div>
        </div>
    )
}
