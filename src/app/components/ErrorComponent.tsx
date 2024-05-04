
type ErrorComponentProps = {
    error : string | undefined
}

export default function ErrorComponent({error} : ErrorComponentProps ) {
    return (
        <main className="min-h-screen bg-gray-950 flex justify-center items-center text-white">
        <h1>{error}</h1>
      </main>
    )
}