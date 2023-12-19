import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="w-full p-4 m-2 rounded text-white bg-black text-center" style = {{backgroundColor: "black"}}>
            <img src={product.imageUrl} alt={product.name} />
            <h1>hehehe</h1>
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}