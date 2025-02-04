import SimilarProductCard from "./SimilarProductCard";

function SimilarProducts() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-6 gap-y-8 overflow-hidden">
        {[1, 1, 1, 1, 1, 1, 1].map((item) => <SimilarProductCard />)}
    </div>
  );
}

export default SimilarProducts;
