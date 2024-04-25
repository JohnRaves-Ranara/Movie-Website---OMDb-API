import Image from "next/image";
export default function MovieBackdrop({
  backdrop,
}: {
  backdrop: string | null;
}) {
  return (
    <Image
      quality={1}
      fill={true}
      src={`https://image.tmdb.org/t/p/original${backdrop}`}
      alt=""
      className="size-full blur-sm object-cover"
      unoptimized = {true}
    ></Image>

    // <div style={{
    //     backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`
    // }}
    // className="size-full blur-sm bg-cover"
    // ></div>

    // <img
    //     loading="lazy"
    //     src={`https://image.tmdb.org/t/p/original${backdrop}`}
    //     alt=""
    //     className="size-full blur-sm object-cover"
    //   />
  );
}
