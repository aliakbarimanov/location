import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);

  const getData = async (e) => {
    await axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const selectCountry = (e) => {
    const cities = data.filter((item) => item.country === e.target.value);
    setCities(cities[0].cities);
  };

  return (
    <section className="home">
      <h2 className="sectionTitle">Hello World!</h2>
      <form>
        <div className="inputs">
          <div className="inputItem">
            <label>Select Country</label>
            <select name="country" onChange={selectCountry}>
              <option>Select here...</option>
              {data.map((item, id) => (
                <option value={item.country} key={id}>
                  {item.country}
                </option>
              ))}
            </select>
          </div>
          <div className="inputItem">
            <label>Select City</label>
            <select name="city">
              <option>Select here...</option>
              {cities.map((item,id) => (
                <option value={item} key={id}>{item}</option>
              ))}
            </select>
          </div>
          <div className="inputItem">
            <label>Write your name</label>
            <input name="userName" type="text" />
          </div>
        </div>
        <div className="btns">
          <button>Complete</button>
        </div>
      </form>
    </section>
  );
};

export default Home;
