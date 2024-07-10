import { useNavigate } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../redux/slices/FetchProduct";
const Header = () => {
  const { isCart, input } = useSelector((state) => state.fetchProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/cart");
  };

  const inputChangeHandler = (e) => {
    dispatch(setInput(e.target.value));
  };
  return (
    <>
      <div className="bg-green-300 p-5 flex justify-between ">
        <div className="text-5xl">😎</div>
        <input
          type="text"
          placeholder="search"
          value={input}
          className="outline-none text-md w-1/2 p-2"
          onChange={inputChangeHandler}
        />
        <div onClick={navigateHandler} className="cursor-pointer text-3xl">
          <BsCartPlusFill />
          <div className="bg-white rounded-xl text-sm absolute top-2 right-3 w-5 h-5 flex justify-center items-center">
            {isCart?.length || 0}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
