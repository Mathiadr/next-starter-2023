import { number } from "zod"
import { Icons } from "./icons"

export type CartItemProps = {
    id: string
    name: string
    category: string
    description: string
    price: number
    amount: number
    onChange?: (id: string, changeBy: number) => void
    onDelete?: (id: string) => void
}

export default function CartItem(props: CartItemProps){
    const {id, name, price, amount, onChange, onDelete} = props
    
    const handleOnChange = (changeBy: number) => {
        onChange?.(id, changeBy)
    }

    const handleOnDelete = () => {
        onDelete?.(id)
    }

    return(
        <tr className="my-1 px-5 py-2 items-center flex">
            <td className="px-2 py-1 font-medium text-gray-900 dark:text-white">
                <button className="bg-red-500 px-3 py-1 rounded-xl" onClick={handleOnDelete}>
                <Icons.trash className="h-3  w-3"/>
                </button>
            </td>
            <td className="px-2 py-1 font-medium text-gray-900 dark:text-white">
                {name}
            </td>
            <td className="px-2 py-1 font-medium text-gray-900 dark:text-white flex flex-row items-center">
                <button onClick={() => handleOnChange(1)}>
                    <Icons.chevronLeft />
                </button>
                <input type="number" 
                    className="h-6 w-6 text-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none m-0 p-0" 
                    placeholder={`${amount}`}
                    onChange={(e) => handleOnChange(parseInt(e.currentTarget.value))} />
                <button onClick={() => handleOnChange(-1)}>
                    <Icons.chevronRight />
                    
                </button>
            </td>
            <td className="px-2 py-1 font-medium text-gray-900 dark:text-white">
                ${price}
            </td>
        </tr>
    );
}