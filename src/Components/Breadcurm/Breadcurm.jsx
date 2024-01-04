/* eslint-disable react/prop-types */
import "./breadcurm.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";
const Breadcurm = (props) => {
  const { product } = props;

  return (
    <div className="breadcurm">
      Home <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> <p>{product.name}</p>
    </div>
  );
};

export default Breadcurm;
