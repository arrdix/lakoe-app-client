interface MessageTemplateBoxProps {
    title: string
    message: string
}

function MessageTemplateBox({ title, message }: MessageTemplateBoxProps) {
    return (
        <div className="flex flex-col gap-1 border border-lightGray rounded-md p-4">
            <h3 className="text-black text-base font-bold">{title}</h3>
            <p className="text-black text-sm font-light">{message}</p>
        </div>
    )
}

export default MessageTemplateBox
