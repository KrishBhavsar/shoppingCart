import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div>
      <div className="flex gap-10">
        <div className="h-[180px] w-[180px]">
          <img src={item.image} className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}
          </h1>
          <h1 className="w-40 text-gray-400 font-normal text-[15px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className="flex justify-between">
            <p className="font-bold text-green-600"><span>$</span>{item.price}</p>
            <div onClick={removeFromCart} className="hover:cursor-pointer">
              <AiFillDelete/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-1 bg-slate-500 m-8"></div>

    </div>
  );
};

export default CartItem;
