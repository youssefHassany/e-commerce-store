"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export function SearchDialogue() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const dialogTriggerRef = useRef<any>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <FaSearch />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-800 text-secondary">
        <DialogHeader>
          <DialogTitle>Search For a Product</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search/${searchVal}`);
            setSearchVal("");

            // Programmatically trigger a click event on the dialogTriggerRef
            if (dialogTriggerRef.current) {
              dialogTriggerRef.current.click();
            }
          }}
          className="grid gap-4 py-4"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              placeholder="Search for a product..."
              required
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="col-span-4 bg-transparent w-full"
            />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Search</Button>
        </DialogFooter>
        <DialogTrigger>
          <Button
            className="bg-secondary hover:bg-secondary-foreground text-secondary-foreground hover:text-secondary w-full"
            ref={dialogTriggerRef}
          >
            Close
          </Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
}
