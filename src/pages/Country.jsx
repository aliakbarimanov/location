import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Country = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getAllData = async () => {
      await axios
        .get(`${process.env.REACT_APP_SINGLE_COUNTRY}/${name}`)
        .then((res) => setData(res.data[0]))
        .catch((err) => console.log(err));
    };
    getAllData();
  }, [name]);

  // const key = Object?.keys(data?.currencies);s
  // console.log(Object?.keys(data?.currencies));

  return (
    <section className="countryPage">
      <img src={data?.flags?.png} alt={data?.name?.common} />
      <ul className="details">
        <li className="info">
          <span className="key">Country:</span>
          <span className="value">{data?.name?.common}</span>
        </li>
        <li className="info">
          <span className="key">Area:</span>
          <span className="value">{data?.area}</span>
        </li>
        <li className="info">
          <span className="key">Borders:</span>
          <span className="value">{data?.borders?.map(item => item + " ")}</span>
        </li>
        <li className="info">
          <span className="key">Capital:</span>
          <span className="value">{data?.capital?.map(item => item + " ")}</span>
        </li>
        <li className="info">
          <span className="key">Coat of Arms:</span>
          <span className="value"><img src={data?.coatOfArms?.png} alt={data?.name?.common} /></span>
        </li>
      </ul>
    </section>
  );
};

export default Country;
