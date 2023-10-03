type ProductProps = {
    id: string
    name: string
    category: string
    description: string
    price: number
    onClickHandler?: () => void
  }

  export default function ProductCard(params: ProductProps) {
    const { id, name, category, description, price, onClickHandler } = params
    return (
      <article className="relative box-border flex flex-col p-2 bg-slate-200 rounded-xl justify-items-start gap-5 pb-3">
        <p className="text-sm  opacity-75">{id}</p>
        <h2 className="text-3xl">{name}</h2>
        <p className="absolute bg-white p-2 right-0 m-2 align-middle justify-center rounded-xl text-center">{category}</p>
        <p className="line-clamp-3">{description}</p>
        <p>${price} USD</p>
        {onClickHandler ? <button onClick={onClickHandler}>Knapp</button> : null}
      </article>
    )
  }
  