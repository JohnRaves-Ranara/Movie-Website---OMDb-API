import { Dispatch, SetStateAction } from "react";

type SearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="bg-gray-900 w-screen px-24 py-5 fixed">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter movie title here..."
        type="text"
        className="bg-gray-800 w-full px-3 py-4 text-lg rounded-lg text-white"
      />
    </div>
  );
}
