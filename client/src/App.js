import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import { useAuthContext } from "./context/authContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Error from "./pages/ErrorPage";
import Home from "./pages/HomePage";
import Search from "./pages/SearchPage";
import BuySell from "./pages/BuySellPage";
import Book from "./pages/BookPage";
import MyBooksPage from "./pages/MyBooksPage";
import AllBooksPage from "./pages/AllBooksPage";

const App = () => {
  const { loadUser } = useAuthContext();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/books" exact>
          <Search />
        </Route>
        <Route path="/books/:id" exact>
          <Book />
        </Route>
        <PrivateRoute path="/buysell" exact>
          <BuySell />
        </PrivateRoute>
        <PrivateRoute path="/mybooks" exact>
          <MyBooksPage />
        </PrivateRoute>
        <Route path="/allbooks" exact>
          <AllBooksPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
