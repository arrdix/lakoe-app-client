import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface ValidatedInputProps<T extends FieldValues> {
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    type: string
    placeholder: string
    name: Path<T>
    register: UseFormRegister<T>
    error: FieldError | undefined
    leftLabel?: string
    rightLabel?: string
    id: string
}

function ValidatedInput<T extends FieldValues>(props: ValidatedInputProps<T>) {
    const {
        onKeyDown,
        autoFocus,
        type,
        placeholder,
        name,
        register,
        error,
        leftLabel,
        rightLabel,
    } = props

    if (leftLabel) {
        return (
            <div className="flex flex-col">
                <div className="flex items-center w-max h-10 border border-r-0 bg-slate-200 py-2 px-3 rounded-s-md text-sm">
                    {leftLabel}
                </div>
                <input
                    onKeyDown={onKeyDown}
                    className="border rounded-md rounded-s-none h-10 pl-2 text-sm w-full"
                    id={name}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    type={type}
                    {...register(name)}
                />
                <div>
                    {error && <span className="text-error">{error.message}</span>}
                </div>
            </div>
        )
    }

    if (rightLabel) {
        return (
            <div className="flex">
                <input
                    onKeyDown={onKeyDown}
                    className="border rounded-md rounded-e-none h-10 pl-2 text-sm w-full"
                    id={name}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    type={type}
                    {...register(name)}
                />
                <div className="flex items-center w-max h-10 border bg-slate-200 border-l-0 py-2 px-3 rounded-e-md text-sm">
                    {rightLabel}
                </div>
                {error && <span className="text-error">{error.message}</span>}
            </div>
        )
    }

    return (
        <div>
            <input
                onKeyDown={onKeyDown}
                className="border rounded-md h-10 pl-2 text-sm w-full"
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
