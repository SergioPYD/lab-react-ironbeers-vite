import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png";
import randomImg from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
function HomePage()



{
  return (
    <div>
      <Link to="/beers">
        <div className="card">
          <div>
            <img src={allBeersImg} alt="beer-img" />
          </div>
          <div>
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eum inventore earum? Assumenda, dicta. Necessitatibus nihil,
              perferendis ratione odit obcaecati voluptatibus odio temporibus
              debitis dicta commodi, quos, laborum provident laudantium!
            </p>
          </div>
        </div>
      </Link>
      <Link to="/random-beer"  >
        <div className="card">
          <div>
            <img src={randomImg} alt="beer-img" />
          </div>
          <div>
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eum inventore earum? Assumenda, dicta. Necessitatibus nihil,
              perferendis ratione odit obcaecati voluptatibus odio temporibus
              debitis dicta commodi, quos, laborum provident laudantium!
            </p>
          </div>
        </div>
      </Link>
      <Link to="/new-beer" >
        <div className="card">
          <div>
            <img src={newBeer} alt="beer-img" />
          </div>
          <div>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eum inventore earum? Assumenda, dicta. Necessitatibus nihil,
              perferendis ratione odit obcaecati voluptatibus odio temporibus
              debitis dicta commodi, quos, laborum provident laudantium!
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
