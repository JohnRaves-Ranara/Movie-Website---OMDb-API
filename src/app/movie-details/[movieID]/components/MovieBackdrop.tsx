
//  <Image
//             loading="lazy"
//             className="blur-sm object-cover"
//             src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//             fill={true}
//             alt="dsdas"
//           ></Image> 
export default function MovieBackdrop({backdrop} : {backdrop: string | null}) {
    return (
        
        <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original${backdrop}`}
            alt=""
            className="size-full blur-sm object-cover"
          />
    )
}