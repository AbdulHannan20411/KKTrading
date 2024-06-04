import SingleProduct from "@/components/Product/SingleProduct";
import productData from "@/components/Product/productData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "KK Products Company",
  description: "Dive into IELC's products for a wealth of knowledge on mastering English. Discover tips, language learning strategies, and insights from experts, tailored for both local and overseas Pakistani learners.",
  // other metadata
};


const Product = () => {
  return (
    <>
      <Breadcrumb
        pageName="Products"
        description="Explore our range of high-quality products, including mudguards and bike spare parts"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center gap-y-9">
            {productData.map((product) => (
              <div
                key={product.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleProduct product={product} />
              </div>
            ))}
          </div>

          {/*<div*/}
          {/*  className="wow fadeInUp -mx-4 flex flex-wrap"*/}
          {/*  data-wow-delay=".15s"*/}
          {/*>*/}
          {/*  <div className="w-full px-4">*/}
          {/*    <ul className="flex items-center justify-center pt-8">*/}
          {/*      <li className="mx-1">*/}
          {/*        <a*/}
          {/*          href="#0"*/}
          {/*          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"*/}
          {/*        >*/}
          {/*          Prev*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="mx-1">*/}
          {/*        <a*/}
          {/*          href="#0"*/}
          {/*          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"*/}
          {/*        >*/}
          {/*          1*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="mx-1">*/}
          {/*        <a*/}
          {/*          href="#0"*/}
          {/*          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"*/}
          {/*        >*/}
          {/*          2*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="mx-1">*/}
          {/*        <a*/}
          {/*          href="#0"*/}
          {/*          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"*/}
          {/*        >*/}
          {/*          3*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="mx-1">*/}
          {/*        <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">*/}
          {/*          ...*/}
          {/*        </span>*/}
          {/*      </li>*/}
          {/*      <li className="mx-1">*/}
          {/*        <a*/}
          {/*          href="#0"*/}
          {/*          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"*/}
          {/*        >*/}
          {/*          12*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*      <li className="mx-1">*/}
          {/*        <a*/}
          {/*          href="#0"*/}
          {/*          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"*/}
          {/*        >*/}
          {/*          Next*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>
    </>
  );
};

export default Product;
