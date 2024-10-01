import { getProductByTitle } from "@/action/product";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  const product = await getProductByTitle(params.slug);
  if (!product) {
    return { title: "Product Not Found | Testify" };
  }
  return { title: `${product.title} | Testify` };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductByTitle(params.slug);
  if (product) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
        <p className="text-gray-600 mb-8">{product?.description}</p>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            We&apos;d love your feedback!
          </h2>
          {/* Add your FeedbackForm component here */}
        </section>
      </div>
    );
  }
}
