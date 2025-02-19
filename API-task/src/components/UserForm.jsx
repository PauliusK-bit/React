import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../../config";

function UserForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchphrase] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const nameHandler = (event) => setName(event.target.value);
  const usernameHandler = (event) => setUsername(event.target.value);
  const emailHandler = (event) => setEmail(event.target.value);
  const streetHandler = (event) => setStreet(event.target.value);
  const suiteHandler = (event) => setSuite(event.target.value);
  const cityHandler = (event) => setCity(event.target.value);
  const zipcodeHandler = (event) => setZipcode(event.target.value);
  const latHandler = (event) => setLat(event.target.value);
  const lngHandler = (event) => setLng(event.target.value);
  const phoneHandler = (event) => setPhone(event.target.value);
  const websiteHandler = (event) => setWebsite(event.target.value);
  const companyNameHandler = (event) => setCompanyName(event.target.value);
  const catchphraseHandler = (event) => setCatchphrase(event.target.value);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!name || !username || !email) {
      setError("Name, username and email is required");
      return;
    }

    const newUser = {
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat,
          lng,
        },
      },
      phone,
      website,
      company: {
        name,
        catchPhrase,
      },
    };

    const { data } = await axios.post(`${API_URL}/users`, newUser);
    navigate(`/api/project/users/${data.id}`);
  };

  return (
    <>
      <h1>Create a User</h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={nameHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={usernameHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={emailHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="street"
            id="street"
            onChange={streetHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="suite">Suite:</label>
          <input type="text" name="suite" id="suite" onChange={suiteHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" onChange={cityHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="number"
            name="zipcode"
            id="zipcode"
            onChange={zipcodeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lat">Lat:</label>
          <input type="number" name="lat" id="zipcode" onChange={latHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="lng">Lng:</label>
          <input type="number" name="lng" id="lng" onChange={lngHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone number:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={phoneHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            id="website"
            onChange={websiteHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="company-name">Company name:</label>
          <input
            type="text"
            name="company-name"
            id="company-name"
            onChange={companyNameHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="catchphrase">CatchPhrase:</label>
          <input
            type="text"
            name="catchphrase"
            id="catchphrase"
            onChange={catchphraseHandler}
          />
        </div>
        <button type="submit">Create a New User</button>
      </form>
    </>
  );
}

export default UserForm;
