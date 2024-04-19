import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import LogOutButton from "../logout button/LogOutButton";

const UserAvatar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-zinc-900">
            <img
              src="https://github.com/shadcn.png"
              className="w-8 h-8 rounded-full"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-zinc-900 text-secondary border-none">
            <NavigationMenuLink>
              <ul className="flex items-center gap-3 p-6 md:w-[250px] lg:w-[250px]">
                <li>
                  <Link href={"/"}>
                    <Button className="bg-zinc-800 text-secondary hover:bg-secondary hover:text-zinc-800">
                      Home
                    </Button>
                  </Link>
                </li>
                <li>
                  <LogOutButton />
                </li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default UserAvatar;
