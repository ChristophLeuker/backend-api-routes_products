import useSWR from "swr";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");
  console.log(data);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (!data) {
    return <h1> cant load data</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {data.map((dates) => (
          <li key={dates.id}>
            id: {dates.id}, name: {dates.name}
          </li>
        ))}
      </ul>
    </>
  );
}
