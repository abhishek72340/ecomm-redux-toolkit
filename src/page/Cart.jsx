import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/slices/FetchProduct";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
const Cart = () => {
  const { isCart } = useSelector((state) => state.fetchProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteItemHandler = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart successfully");
  };
  return (
    <div className="p-4">
      {isCart.length > 0 && (
        <h2 className="text-center text-2xl font-bold text-green-300 underline p-4">
          Cart Items
        </h2>
      )}
      {isCart && isCart.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {isCart?.map((item) => (
            <div
              key={item?.id}
              className="border border-green-300 p-2 rounded-md flex items-center"
            >
              <img
                src={item?.thumbnail}
                alt="img"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold">{item?.title}</div>
                <div className="text-gray-600">₹{item?.price}</div>
                <div className="text-gray-700 text-xs w-1/2">
                  {item?.description}
                </div>
              </div>
              <div onClick={() => deleteItemHandler(item?.id)}>
                <MdDelete cursor="pointer" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex justify-center items-center h-screen flex-col gap-5">
          <div className=" text-green-300 text-5xl font-bold">
            Your cart is empty 🥺
          </div>
          <button
            className="border border-green-300 p-2 bg-green-300 "
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
