import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export default function Cart({ children, total }: { children: ReactNode, total: number}){
    const [showCart, setShowCart] = useState(false)
    const router = useRouter()

    const handleCartButton = () => {
        setShowCart((prev) => !prev)
    }

    return(
        <div className="flex static ">
            <button className="fixed top-0 right-0 m-5 p-2 pt-1 pb-1 rounded bg-slate-400 z-20" onClick={() => handleCartButton()}>{showCart ? "Close Cart" : "Show Cart"}</button>
            { showCart ? 
            <div className="fixed right-0 inset-y-0 bg-gray-300 z-10 p-5 h-screen pt-20 overflow-scroll shadow-2xl drop-shadow transition ease-in-out delay-150 box-border">
                <h2 className="bg-white px-3 py-2 text-2xl rounded-3xl w-full m-1">Cart</h2>
                <table className="bg-white px-3 py-2 rounded-3xl w-full m-1">
                    <tbody>{children}</tbody>
                </table>
                <div className="flex justify-between bg-white px-3 py-2 rounded-3xl w-full m-1">
                    <p>Price Total </p>
                    <p>${total}</p>
                </div>
                <button className="right m-5 px-2 py-1 font-semibold rounded bg-green-500 z-20 hover:bg-green-700" onClick={() => router.push("/")}>Buy</button>
            </div>
            : null}
        </div>
    );
}