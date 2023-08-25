import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

function RandomBeersPage() {
  const [randomBeer, setrandomBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const {image,name,tagline,first_brewed , attenuation_level,description,cotributed_by} = randomBeer
  const params = useParams();
  const redirect = useNavigate;

  useEffect(() => {
    getData();
  }, [params.beerId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response.data);
      setrandomBeer(response.data);
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
    <div>
      <div>
        <img src={randomBeer.image_url} alt="imageBeer" width={100} />
      </div>
      <div>
        <div>
          <h2>{randomBeer.name}</h2>
          <h5>{randomBeer.tagline}</h5>
        </div>
        <div>
          <h2>{randomBeer.attenuation_level}</h2>
          <h5>{randomBeer.first_brewed}</h5>
        </div>
      </div>
      <div>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeersPage;
