import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {

  return (
    <Link className="searchItem" to={`/country/${data?.name?.common}`}>
      <div className="itemImg">
        <img src={data.flags.png} alt={data.name.common} />
      </div>
      <div className="itemDetail">
        <h2 className="itemName">{data.name.common}</h2>
      </div>
    </Link>
  );
};

export default CountryCard;
