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
      className="object-cover size-full blur-sm"
    ></Image>
  );
}
