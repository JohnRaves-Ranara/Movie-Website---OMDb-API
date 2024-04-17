

type MovieCardProps = {
    poster: string
}

export default function MovieCard({poster}: MovieCardProps) {
    return (
        <img src={poster} className=""/>
    )
}