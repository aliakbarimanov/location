import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Country = () => {
  const { singleId } = useParams();
  const [data, setData] = useState([]);
  // const [newData, setNewData] = useState({});

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    await axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleData();
  }, [singleId]);

  const getSingleData = () => {
    const singleData = data.find((item, id) => console.log(id===singleId));
    // setNewData(singleData);
  };

  return (
    <section className="countryPage">
      <img src="#" alt="a" />
      <ul className="details">
        <li className="info">
          <span className="key">Name:</span>
          <span className="value">aaa</span>
        </li>
      </ul>
    </section>
  );
};

export default Country;
