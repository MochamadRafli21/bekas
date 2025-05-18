import { useNavigate, useLocation } from "react-router-dom";
import { trpc } from "@/lib/trpc";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  const [search, setSearch] = useState(initialQuery);
  const [debouncedSearch, setDebouncedSearch] = useState(initialQuery);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timeout);
  }, [search]);

  const { data: searchResults } = trpc.product.list.useQuery({
    q: debouncedSearch,
  });

  const onSubmitSearch = () => {
    const params = new URLSearchParams(location.search);
    if (search) {
      params.set("q", search);
    } else {
      params.delete("q");
    }
    navigate({ pathname: "/", search: params.toString() }, { replace: true });
  };

  return (
    <>
      <div className="relative w-full md:w-fit flex flex-col">
        <div className="flex items-center gap-4">
          <Input
            type="search"
            placeholder="Search phones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64"
          />
          <Button onClick={() => onSubmitSearch()}>
            <Search />
          </Button>
        </div>
        {debouncedSearch && (
          <div className="absolute top-12 w-full border rounded-sm bg-white border-gray-200 px-2 z-10">
            <div>
              {searchResults?.map((product) => (
                <div key={product.id} className="text-sm text-muted-foreground">
                  {product.name}
                </div>
              ))}

              <span
                className="text-gray-600 italic cursor-pointer"
                onClick={() => onSubmitSearch()}
              >
                find {search}...
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
