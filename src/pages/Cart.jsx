import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (
    <div className="flex justify-evenly mt-4">

      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="mt-10">
          <div className="text-[20px]"
          >YOUR CART</div>
          <div className="text-[50px] font-bold text-green-600 mt-[-15px]">SUMMARY</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="absolute bottom-[375px] ">
          <p>Total Amount: <span className="font-bold">${totalAmount}</span></p>
          <button className=" border rounded-lg bg-green-600 text-white px-10 text-[20px] w-[300px] py-1 mt-2 ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center w-full absolute bottom-[350px]">
      <h1 className="font-bold text-[25px]"
      >Cart Empty</h1>
      <Link to={"/"}>
        <button className="mt-10  border bg-green-500 text-white rounded-lg p-2 text-[20px]">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
