/* eslint-disable @next/next/no-img-element */
import axios from "axios";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

async function getData() {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
}
export default async function ProductsPage() {
    const data: Product[] = await getData();

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id} style={{ marginBottom: "20px" }}>
                        <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
