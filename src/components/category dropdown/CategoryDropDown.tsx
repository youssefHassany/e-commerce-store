"use client";

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
import Link from "next/link";

const CategoryDropDown = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-zinc-900">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-zinc-900 text-secondary border-none">
            <NavigationMenuLink>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                {categories.map((category, idx) => (
                  <li className="row-span-3" key={idx}>
                    <Link
                      href={`/categories/${category}`}
                      className="m-2 hover:text-primary duration-200"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryDropDown;
