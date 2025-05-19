import { Link } from "react-router-dom";
import SearchInput from "../molecules/search-input";
import { Button } from "../ui/button";
import { Funnel } from "lucide-react";
import Filter from "@/components/molecules/filter";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
export default function Navbar() {
  return (
    <div className="w-full min-h-16 border-b flex items-center px-4 py-2 gap-4">
      <Link to={`/`}>
        <span className="italic font-bold text-lg pb-2">Bekas</span>
      </Link>
      <SearchInput />
      <Drawer>
        <DrawerTrigger>
          <Button className="md:hidden">
            <Funnel />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <Filter />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
