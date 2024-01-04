import  { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcurm from "../../Components/Breadcurm/breadcurm";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
import "./Product.css"

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <Breadcurm product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      <div></div>
    </div>
  );
};

export default Product;

