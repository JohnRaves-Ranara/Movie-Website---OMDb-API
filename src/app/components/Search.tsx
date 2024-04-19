import { Dispatch, SetStateAction } from "react";

type SearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="w-screen py-8 fixed px-24">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter movie title here..."
        type="text"
        className="bg-gray-800/80 w-full px-5 py-4 text-lg rounded-lg text-white"
      />
    </div>
  );
}
