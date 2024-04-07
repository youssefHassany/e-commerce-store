"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  price: number;
  id: number;
  category: string;
  index: number;
}

const ProductCard = ({ title, image, price, id, category, index }: Props) => {
  return (
    <motion.span
      transition={{ duration: 0.8, delay: index * 0.1 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
    >
      <Link href={`/product/${id}`}>
        <Card className="h-full bg-zinc-800 text-secondary border-none flex flex-col items-center justify-between hover:bg-opacity-20 duration-150">
          <CardHeader>
            <CardTitle className="text-sm md:text-lg text-center">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img alt={title} src={image} className="w-40 m-auto" />
          </CardContent>
          <CardFooter className="flex flex-col-reverse gap-1 md:flex-row justify-between items-center w-full">
            <CardDescription>{price} $</CardDescription>
            <Badge>{category}</Badge>
          </CardFooter>
        </Card>
      </Link>
    </motion.span>
  );
};

export default ProductCard;
