import Hero from "@/components/hero/Hero";
import { Product } from "@/types/product";

export default async function Product({ params }: { params: { id: number } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await res.json();

  return (
    <section className="flex min-h-screen flex-col items-center justify-between py-24 px-8 bg-zinc-900 text-secondary">
      <Hero
        category={product.category}
        description={product.description}
        image={product.image}
        price={product.price}
        rating={product.rating}
        title={product.title}
        id={product.id}
      />
    </section>
  );
}
