import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface ValidatedInputProps<T extends FieldValues> {
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    type: string
    placeholder: string
    name: Path<T>
    register: UseFormRegister<T>
    error: FieldError | undefined
}

function ValidatedInput<T extends FieldValues>(props: ValidatedInputProps<T>) {
    const { onKeyDown, autoFocus, type, placeholder, name, register, error } = props

    return (
        <div>
            <input
                onKeyDown={onKeyDown}
                className="border-2 border-gray-200 rounded-md h-10 pl-2 text-sm w-full"
                id={name}
                placeholder={placeholder}
                autoFocus={autoFocus}
                type={type}
                {...register(name)}
            />
            {error && <span className="text-error">{error.message}</span>}
        </div>
    )
}

export default ValidatedInput
