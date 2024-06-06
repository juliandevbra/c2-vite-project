import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [recipe, setRecipe] = useState();
  const params = useParams();
  console.log(params);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
    });
  }, []);

  return (
    <div>
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt="" />
          {/* <p>{recipe.instructions}</p> */}
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </>
      )}
    </div>
  );
};

export default Detail;
