import React, { useEffect, useState } from "react";
import "./UseEffectFour.css";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function UseEffectFour() {
  const [drinksData, setDrinksData] = useState([]);
  const [searchDrink, setSearchDrink] = useState("");
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState({status:false, msg:''})

  const fatchDrink = async (apiURL) => {
    setLoading(true)
    setIsError({status:false, msg:''})
   try {
    const response = await fetch(apiURL);
    // const data = response.json()
    const { drinks } = response.json();
    setDrinksData(drinks); 
    setLoading(false)
    setIsError({status:false, msg:''})
    if(!drinks){
        throw new Error('Data Not Found')
    }
   } catch (error) {
    setLoading(false)
    setIsError({status:true, msg: error.message || 'Something Went Wrong!'})
   }
  };

  useEffect(() => {
    const correctURL = `${URL}${searchDrink}`;
    fatchDrink(correctURL);
    console.log(correctURL);
  }, [searchDrink]);

//   if(loading){
//     return(
//         <h3>Loading....</h3>
//     )
//   }

  return (
    <div>
      <h2>Use Effect Four</h2>
      
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter Drink name"
          value={searchDrink}
          onChange={(e) => setSearchDrink(e.target.value)}
        />
      </form>

      <hr />
      {loading && !isError?.status && <h3>Loading.....</h3>}
      {isError?.status && <h3>{isError.msg}</h3>}

      {
        !loading && !isError?.status && <ul className="cocktail-data">
        {drinksData.map((eachDrink) => {
          const { idDrink, strDrink, strDrinkThumb } = eachDrink;
          return (
            <li key={idDrink}>
              <div>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className="text">
                <h3>{strDrink}</h3>
              </div>
            </li>
          );
        })}
      </ul>
      }
    </div>
  );
}

export default UseEffectFour;
