import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProduct, addToCart } from "../redux/slices/FetchProduct";
import { useSelector, useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";
const ProductList = () => {
  const navigate = useNavigate();
  const { data, error, loading, input } = useSelector(
    (state) => state.fetchProduct
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-3xl font-bold flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-3xl text-red-500 font-bold flex justify-center items-center h-screen">
        {error}😥
      </div>
    );
  }

  const addCartHandler = (id) => {
    dispatch(addToCart(id));
    toast.success("Item added to cart successfully");
  };

  const searchFilter = data?.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12 justify-items-center items-stretch p-10">
        {searchFilter && searchFilter.length > 0 ? (
          searchFilter?.map((item) => {
            return (
              <div
                key={item?.id}
                className="border-2 border-green-300 p-2 flex flex-col "
              >
                <img
                  src={item?.thumbnail}
                  alt="img"
                  loading="lazy"
                  className="w-full h-[90%] object-cover rounded cursor-pointer "
                  onClick={() => navigate(`/product-details/${item?.id}`)}
                />
                <p>{item.title}</p>
                <p className="text-lg font-bold">₹{item.price}</p>
                <div className="flex justify-end ">
                  {" "}
                  <button
                    onClick={() => addCartHandler(item?.id)}
                    className="bg-green-400  flex items-center p-1"
                  >
                    <FiPlus />
                    Add
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-3xl font-bold text-green-300 absolute top-1/2 left-[40%] ">
            No data found🥺
          </p>
        )}
      </div>
    </>
  );
};

export default ProductList;
