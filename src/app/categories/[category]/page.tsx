import ProductsList from "@/components/products list/ProductsList";
import Title from "@/components/title/Title";

export default function CategoryList({
  params,
}: {
  params: { category: string };
}) {
  const categoryTitle = decodeURIComponent(params.category); // removes the %20 from the category name
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-8 bg-zinc-900 text-secondary">
      <Title title={categoryTitle} />
      <ProductsList param={`/category/${params.category}`} />
    </div>
  );
}
