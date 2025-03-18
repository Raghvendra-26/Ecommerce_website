import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router";
import ShopPage from "./pages/shop/ShopPage";
import Navbar from "./components/navbar/Navbar";
import signIN_signUP from "./pages/signIn-signUp/signIN_signUP";
import { onSnapshot } from "firebase/firestore";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapshot) => {
          // Use snapshot.data() to get the document data
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={signIN_signUP} />
        </Routes>
      </div>
    );
  }
}

export default App;
