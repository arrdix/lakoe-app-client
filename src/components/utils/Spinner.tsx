interface SpinnerProps {
    size: number
}

function Spinner({ size }: SpinnerProps) {
    return (
        <div
            className={`inline-block h-${size} w-${size} animate-spin-fast rounded-full border-4 border-solid border-current border-e-transparent border-cyan mt-1 ml-1`}
        ></div>
    )
}

export default Spinner
