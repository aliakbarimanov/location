import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userName, setUserName] = useState("");

  const getData = async (e) => {
    await axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    selectCountry();
  }, [country]);

  const selectCountry = () => {
    const cities = data.filter((item) => item.country === country);
    setCities(cities[0]?.cities);
  };

  const submitData = (e) => {
    e.preventDefault();
  };

  return (
    <section className="home">
      <h2 className="sectionTitle">Hello World!</h2>
      <form>
        <div className="inputs">
          <div className="inputItem">
            <label>Select Country</label>
            <select
              name="country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="">Select here...</option>
              {data.map((item, id) => (
                <option value={item.country} key={id}>
                  {item.country}
                </option>
              ))}
            </select>
          </div>
          <div className="inputItem">
            <label>Select City</label>
            <select
              name="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value="">Select here...</option>
              {cities?.map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="inputItem">
            <label>Write your name</label>
            <input
              name="userName"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="btns">
          <button onClick={submitData}>Complete</button>
        </div>
      </form>
      <Modal />
    </section>
  );
};

export default Home;
