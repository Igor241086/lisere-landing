import SearchBar from "./components/SearchBar";
import DataDisplay from "./components/DataDisplay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <h1>SWAPI</h1>
      <SearchBar />
      <DataDisplay />
      <Footer />
    </div>
  );
};

export default App;