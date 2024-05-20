import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function UseEffectTwo() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const usersFetchData = async (userApi) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const Response = await fetch(userApi);
      const data = await Response.JSON();
      setUser(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (Response.status === 404) {
        throw new Error("Data Not Found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: false,
        msg: error.messae || "something went wrong",
      });
    }
  };
  useEffect(() => {
    usersFetchData(URL);
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }
  if(isError?.status){
    return(
      <h3>{isError?.msg}</h3>
    )
  }

  return (
    <div>
      <h1>UseEffectTwo</h1>
      <ul>
        {user.map((eachUser) => {
          const { id, name, email, phone, website } = eachUser;
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{website}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UseEffectTwo;
