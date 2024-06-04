import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productData from "./productData";

const Product = () => {
  return (
    <section
      id="product"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Products"
          paragraph="Explore our range of high-quality products, including mudguards and bike spare parts"
          center
        />

        <div className="flex w-full flex-wrap gap-6 justify-center">
          {productData.map((product) => (
            <div key={product.id} className="w-[20rem] max-h-[30rem]">
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
