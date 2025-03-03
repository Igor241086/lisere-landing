import { useSelector } from "react-redux";

const DataDisplay = () => {
  const { data, loading, error } = useSelector((state) => state.swapi);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default DataDisplay;