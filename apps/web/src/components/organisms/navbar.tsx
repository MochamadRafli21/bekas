import { Link } from "react-router-dom";
import SearchInput from "../molecules/search-input";

export default function Navbar() {
  return (
    <div className="w-full min-h-16 border-b flex items-center px-4 py-2 gap-4">
      <Link to={`/`}>
        <span className="italic font-bold text-lg pb-2">Bekas</span>
      </Link>
      <SearchInput />
    </div>
  );
}
