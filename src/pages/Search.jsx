import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CountryCard from "../components/CountryCard";

const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    await axios
      .get(process.env.REACT_APP_ALL_COUNTRIES_ALL_DATA)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const searchFunction = (e) => {
    if (e.target.value) {
      const filteredData = data.filter((item) =>
        item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filteredData);
    } else {
      getAllData();
    }
  };

  return (
    <section className="search">
      <input
        type="text"
        name="search"
        className="searchInput"
        placeholder="Search country"
        onChange={searchFunction}
      />
      <ul className="searchList">
        {data?.map((item) => (
          <CountryCard data={item} key={item?.cca3} />
        ))}
      </ul>
    </section>
  );
};

export default Search;
