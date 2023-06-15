import { useRouter } from "next/router";
import useSWR from "swr";

export default function SingleProductList() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (!data) {
    return <h1> cant load data</h1>;
  }
  console.log(data);
  return (
    <>
      <p>
        {data.name}, {data.description}
      </p>
    </>
  );
}
