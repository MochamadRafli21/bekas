import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { trpc } from "@/lib/trpc";
import { useState } from "react";

export default function ProductSearchCommand() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { data: products } = trpc.product.list.useQuery({ q: query });

  const searchProduct = () => {
    navigate(`/?q=${query}`);
    setIsOpen(false);
  };

  const openProduct = (slug?: string) => {
    if (!slug) return;
    navigate(`/product/${slug}`);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-sm">
      <Command
        shouldFilter={false}
        className="w-full max-w-sm border rounded-lg"
      >
        <CommandInput
          placeholder="Search phones..."
          value={query}
          onValueChange={setQuery}
          onClick={() => setIsOpen(!isOpen)}
        />
        {query && isOpen ? (
          <CommandList className="absolute top-full left-0 z-50 w-full bg-white shadow-lg border rounded-md mt-1 max-h-64 overflow-auto">
            <CommandItem value={query} onSelect={searchProduct}>
              find {query || "used phone"}...
            </CommandItem>
            {products?.items?.map((product) => (
              <CommandItem
                key={product.id}
                value={product.name}
                onSelect={() => openProduct(product.slug)}
              >
                {product.name}
              </CommandItem>
            ))}
          </CommandList>
        ) : (
          <></>
        )}
      </Command>
    </div>
  );
}
