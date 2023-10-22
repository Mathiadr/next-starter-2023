import { Icons } from "./icons"

type ProductProps = {
    id: string
    name: string
    category: string
    description: string
    price: number
    addToCart?: (id: string) => void
  }

  export default function ProductCard(params: ProductProps) {
    const { id, name, category, description, price, addToCart } = params

    function handleAddToCart(){
      addToCart?.(id)
    }

    return (
      <article className="relative box-border flex flex-col p-2 bg-slate-200 rounded-xl justify-items-start gap-5 pb-3">
        <p className="text-sm  opacity-75">{id}</p>
        <h2 className="text-2xl">{name}</h2>
        <p className="absolute bg-white p-2 right-0 m-2 align-middle justify-center rounded-xl text-center">{category}</p>
        <p className="line-clamp-3 text-sm">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <p>${price} USD</p>
          {addToCart ? <button className="bg-blue-500 rounded-xl w-max px-2 py-1 flex items-center justify-between gap-1" onClick={() => handleAddToCart()}>
            <Icons.addCircle />
            Add To Cart
          </button> : null}
        </div>
        
      </article>
    )
  }
  