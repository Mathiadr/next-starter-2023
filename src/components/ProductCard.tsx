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
      <article>
        <h2>{id}</h2>
        <p>{name}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
        {onClickHandler ? <button onClick={onClickHandler}>Knapp</button> : null}
      </article>
    )
  }
  