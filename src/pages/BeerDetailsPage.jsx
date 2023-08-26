import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

function BeerDetailsPage(props) {
  const [oneBeer, setOneBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const {image,name,tagline,first_brewed , attenuation_level,description,cotributed_by} = oneBeer
  const params = useParams();
  const redirect = useNavigate;

  useEffect(() => {
    getData();
  }, [params.beerId]);

  const getData = async () => {
    try {
    if (props.randomBeer===true){

      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response.data);
      setOneBeer(response.data);
      setIsLoading(false);

    } else if (props.randomBeer === undefined){
const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      console.log(response.data);
      setOneBeer(response.data);
      setIsLoading(false);
    }
      
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
        
        <img src={oneBeer.image_url} alt="imageBeer" width={100} />
      </div>
      <div>
        <div>
          <h2>{oneBeer.name}</h2>
          <h5>{oneBeer.tagline}</h5>
        </div>
        <div>
          <h2>{oneBeer.attenuation_level}</h2>
          <h5>{oneBeer.first_brewed}</h5>
        </div>
      </div>
      <div>
        <p>{oneBeer.description}</p>
        <p>{oneBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
