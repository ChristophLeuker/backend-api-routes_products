import { getProductById, products } from "../../../services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return response.status(404).json({ status: "404 not found" });
  }

  response.status(200).json(getProductById(id));
}
