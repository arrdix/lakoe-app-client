import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface ValidatedInputProps<T extends FieldValues> {
    onKeyDown?: () => void
    autoFocus?: boolean
    placeholder: string
    name: Path<T>
    register: UseFormRegister<T>
    error: FieldError | undefined
}

function ValidatedTextarea<T extends FieldValues>(props: ValidatedInputProps<T>) {
    const { onKeyDown, autoFocus, placeholder, name, register, error } = props

    return (
        <div>
            <textarea
                onKeyDown={onKeyDown}
                className="border-2 border-gray-200 rounded-md h-24 pl-2 pt-2 text-sm w-full"
                id={name}
                defaultValue={placeholder}
                autoFocus={autoFocus}
                {...register(name)}
            />
            {error && <span className="text-error">{error.message}</span>}
        </div>
    )
}

export default ValidatedTextarea
