"use client";

import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  //!get the user to whole project
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("ovigoLogInToken");

      if (token) {
        try {
          const response = await fetch("http://159.223.78.171:5000/getMe", {
            method: "GET",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${token}`,
            },
          });
          const data = await response.json();
          if (data?.status === "Successfully") {
            setUserEmail(data?.email);
            setUserRole(data?.userRole);
            setUserPhone(data?.userPhone);
            setLoading(false);
          } else {
            setUserEmail(null);
            setUserRole(null);
            setUserPhone(null);
            setLoading(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setUserEmail(null);
        setUserRole(null);
        setUserPhone(null);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);

  const authInfo = {
    userEmail,
    userRole,
    userPhone,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
