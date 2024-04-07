import ProductsList from "@/components/products list/ProductsList";
import Title from "@/components/title/Title";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-8 bg-zinc-900 text-secondary">
      <Title title="Products" />
      <ProductsList param="" />
    </main>
  );
}
