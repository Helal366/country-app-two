import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };
  const handleSearch = (text) => {
    const searchText = text.toLowerCase();
    const searchCountries = filteredCountries.filter((country) => {
      const name = country.name.common.toLowerCase();
      return name.startsWith(searchText);
    });
    setFilteredCountries(searchCountries);
  };
  const loadingMessage = <p>Loading...</p>;
  const errorMessage = <p>{error && error.message}</p>;
  return (
    <>
      <h1>Country App Revision </h1>
      <Search handleSearch={handleSearch}></Search>
      {isLoading && loadingMessage}
      {error && errorMessage}
      <Countries
        countries={filteredCountries}
        handleRemoveCountry={handleRemoveCountry}
      ></Countries>
    </>
  );
}

export default App;
