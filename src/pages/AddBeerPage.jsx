import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AddBeerPage() {
    const redirect = useNavigate()
  const [allForm, setAllForm] = useState({
    name: "",
    tagline: "",
    image_url:"",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });

 

const handleFormChange = (event) =>{
    setAllForm({
        ...allForm,
        [event.target.name]: event.target.value
    })
    }

const handleCreateBeer = async (event) => {
    event.preventDefault()

    try {
        
await axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{
    name: allForm.name,
    tagline: allForm.tagline,
    description: allForm.description,
    image_url: allForm.image_url,
    first_brewed: allForm.first_brewed,
    brewers_tips: allForm.brewers_tips,
    attenuation_level: allForm.attenuation_level,
    contributed_by: allForm.contributed_by
})
    redirect("/beers")

    } catch (error) {
        redirect("/error")
    }


}

  return (
    <div>
        <h2>Add New Beer</h2>
      <form style={{display:"flex", flexDirection:"column",gap:"5px"}}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleFormChange}
          value={allForm.name}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleFormChange}
          value={allForm.tagline}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleFormChange}
          value={allForm.description}
        />
        <br />
        <label htmlFor="image_url">Image</label>
        <input
          type="text"
          name="image_url"
          onChange={handleFormChange}
          value={allForm.image_url}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleFormChange}
          value={allForm.first_brewed}
        />
        <br />
        <label htmlFor="brewers_tips">Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleFormChange}
          value={allForm.brewers_tips}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleFormChange}
          value={allForm.attenuation_level}
        />
        <br />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleFormChange}
          value={allForm.contributed_by}
        />

        <br />
        <button type="submit" onClick={handleCreateBeer}>
          Create
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
