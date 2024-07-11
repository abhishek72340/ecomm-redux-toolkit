import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.fetchProduct);
  const getSingleProduct =
    data && data.filter((item) => item.id === Number(id));
  return (
    <div className="flex justify-center items-center m-5">
      {getSingleProduct &&
        getSingleProduct.map((item, index) => {
          return (
            <div
              key={index}
              className=" flex justify-center items-center flex-col gap-2"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="border-2 border-green-300"
              />
              <h1 className="text-xl font-bold ">Name: {item.title}</h1>
              <h3 className="text-xl font-bold">Price: {item.price}₹</h3>
              <h3 className=" w-1/2 ">{item.description}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetails;
