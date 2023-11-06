import axios from "axios";
import { useEffect, useState, useRef } from "react";
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
  const [openModal, setOpenModal] = useState(false);

  const userData = {
    country: country,
    city: city,
    user: userName,
  };

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

    if (country === "" || country.trim() === "") {
      setOpenModal(false);
    } else if (city === "" || city.trim() === "") {
      setOpenModal(false);
    } else if (userName === "" || userName.trim() === "") {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  const sectionRef = useRef();
  const btnRef = useRef();
  const modalRef = useRef();

  const secClick = (e) => {
    if (e.target !== modalRef.current && e.target !== btnRef.current) {
      setOpenModal(false);
    }
  };

  return (
    <section className="home" ref={sectionRef} onClick={secClick}>
      <h2 className="sectionTitle">Hello World!</h2>
      <form>
        <div className="inputs">
          <div className="inputItem">
            <label>Select Country</label>
            <select
              className="countrySelect"
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
              className={country ? "citySelect" : "citySelect disabled"}
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
              className={city ? "userInput" : "userInput disabled"}
              name="userName"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="btns">
          <button
            className={userName ? "submitBtn" : "submitBtn disabled"}
            ref={btnRef}
            onClick={submitData}
          >
            Complete
          </button>
        </div>
      </form>
      {openModal && <Modal data={userData} modalRef={modalRef} />}
    </section>
  );
};

export default Home;
