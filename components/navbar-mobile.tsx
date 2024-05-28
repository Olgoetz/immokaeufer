import React from "react";
import { navLinks } from "./nabar-links";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function NavbarMobile() {
  return (
    <main className="md:hidden">
      <Sheet>
        <SheetTrigger className="float-right p-4">
          <Menu />
        </SheetTrigger>
        <SheetContent className="w-full" side={"left"}>
          {/* <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanentl/Users/olivergoetz/Development/hihfg/components/scroll-to-top-button.tsxy delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader> */}
          <ul className="flex flex-col h-full md:hidden justify-between text-lg items-center">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.label}
                className="rounded-md p-3 hover:bg-green-400 hover:text-white "
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </main>
  );
}

export default NavbarMobile;
