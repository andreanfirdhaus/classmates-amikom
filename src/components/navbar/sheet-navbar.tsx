import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { AlignRight } from "lucide-react";

export default function SheetNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <AlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                        description
                    </SheetDescription>
                </SheetHeader> */}
        <div className="flex flex-col h-screen gap-6 justify-center items-center">
          <NavLink to="/">
            <p className="text-base font-medium capitalize">my homie</p>
          </NavLink>
          <NavLink to="/graduated">
            <p className="text-base font-medium capitalize">
              who&apos;s graduated
            </p>
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}