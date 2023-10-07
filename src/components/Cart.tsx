import { ReactNode, useState } from "react";

export default function Cart({ children, total }: { children: ReactNode, total: number}){
    const [showCart, setShowCart] = useState(false)

    const handleCartButton = () => {
        setShowCart((prev) => !prev)
    }

    return(
        <div className="flex static ">
            <button className="fixed top-0 right-0 m-5 p-2 pt-1 pb-1 rounded bg-slate-400 z-20" onClick={() => handleCartButton()}>{showCart ? "Close Cart" : "Show Cart"}</button>
            { showCart ? 
            <div className="fixed right-0 inset-y-0 bg-gray-300 z-10 p-5 h-screen pt-20 overflow-scroll">
                <h2 className="bg-white px-3 py-2 text-2xl rounded-3xl w-full m-1">Cart</h2>
                <table className="bg-white px-3 py-2 rounded-3xl w-full m-1">
                    <tbody>{children ? children : "No items have been added to cart"}</tbody>
                </table>
                <div className="flex justify-between bg-white px-3 py-2 rounded-3xl w-full m-1">
                    <p>Price Total </p>
                    <p>${total}</p>
                </div>
            </div>
            : null}
        </div>
    );
}