import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const redirect = useNavigate;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );

      setAllBeers(response.data);
      setIsLoading(false);
    } catch (error) {
      redirect("/error");
    }
  };

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <PacmanLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div
      className="card-beers"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {allBeers.map((eachBeer) => {
        const { name, image_url, tagline, _id, contributed_by } = eachBeer;

        return (
          <div key={_id} style={{ width: "300px", height: "400px" }}>
            <div>
              <img src={image_url} alt="beerImg" width={50} />
            </div>
            <div>
              <h3>{name}</h3>
              <h4>{tagline}</h4>
              <p>
                <b>CREATED by:</b>
                {contributed_by}
              </p>
              <Link to={`/beers/${_id}`}>VER MÁS</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
