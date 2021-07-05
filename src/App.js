import "./App.css";
import React, { useEffect, useState } from "react";
import { Header, Pages } from "./components";
import { myAccountFetch } from "./api/users";
import { allIngredients } from "./api/ingredients";

const App = () => {
  const [grabbedIngredients, setIngredients] = useState([]);
  const [resetIngredients, setResetIngredients] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null);
  const [currentUserId, setCurrentUserId] = useState();
  const [currentUserGuest, setCurrentUserGuest] = useState();
  const [myAccountData, setMyAccountData] = useState([]);
  const [accountUsername, setAccountUsername] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [accountCity, setAccountCity] = useState("");
  const [accountState, setAccountState] = useState("");
  const [accountZip, setAccountZip] = useState("");
  // const [errorMessage, setErrorMessage] = useState();
  const myToken = JSON.parse(localStorage.getItem("token"));

  const retrieveIngredients = async () => {
    allIngredients()
      .then((ingredient) => {
        setIngredients(ingredient);
        setResetIngredients(ingredient);
      })
      .catch((error) => {
        // something something errors
      });
  };

  const retrieveUser = async () => {
    myAccountFetch(myToken)
      .then((user) => {
        setIsAdmin(user.isAdmin);
        setCurrentUserId(user.id);
        currentUserGuest(user.isGuest);
        setAccountUsername(user.username);
        setAccountEmail(user.email);
        setAccountAddress(user.address);
        setAccountCity(user.city);
        setAccountState(user.state);
        setAccountZip(user.zip);
      })
      .catch((error) => {
        // something something errors
      });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await retrieveIngredients();
      await retrieveUser();
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header>
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      </header>
      <main>
        <Pages
          grabbedIngredients={grabbedIngredients}
          setIngredients={setIngredients}
          resetIngredients={resetIngredients}
          setResetIngredients={setResetIngredients}
          currentUserId={currentUserId}
          setCurrentUserId={setCurrentUserId}
          currentUserGuest={currentUserGuest}
          setCurrentUserGuest={setCurrentUserGuest}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          accountUsername={accountUsername}
          setAccountUsername={setAccountUsername}
          accountEmail={accountEmail}
          setAccountEmail={setAccountEmail}
          accountAddress={accountAddress}
          setAccountAddress={setAccountAddress}
          accountCity={accountCity}
          setAccountCity={setAccountCity}
          accountState={accountState}
          setAccountState={setAccountState}
          accountZip={accountZip}
          setAccountZip={setAccountZip}
        />
      </main>
    </div>
  );
};
export default App;
