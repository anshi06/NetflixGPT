import React from "react";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGptSearchView } from "../store/gptSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { changeLanguage } from "../store/appConfig";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  useEffect(() => {
    //Kind of listener, when user auth changed the this keeps track of it
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Clean Up listener, Unsubscribe when component unmounts.
    return () => unsubscribe();
  }, [navigate, dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    //Toggle my gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //Change language og the app.
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between ">
      <img className="w-36 m-2 mx-auto md:mx-0" alt="logo" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex m-2 items-center justify-between">
          {showGptSearch && <select className="p-2 bg-black bg-opacity-70 rounded-lg text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option className="text-white bg-black" value={lang.identifier} key={lang.identifier}>{lang.name}</option>
            ))}
          </select>}
          <button
            className="py-2 px-4 bg-purple-800 text-white rounded mx-4 "
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <button
            className="font-bold m-2 p-2 text-white bg-black bg-opacity-70 rounded"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
