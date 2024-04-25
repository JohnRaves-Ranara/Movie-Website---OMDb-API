
type ErrorComponentProps = {
    error : string | undefined
}

export default function ErrorComponent({error} : ErrorComponentProps ) {
    return (
        <div className="min-h-screen bg-gray-950 flex justify-center items-center text-white">
        {error}
      </div>
    )
}