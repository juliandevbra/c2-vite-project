import axios from "axios";
import React, { useEffect, useState } from "react";

const ExampleFetch = () => {
  const [perrito, setPerrito] = useState({});
  const endpoint = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    // fetch(endpoint)
    //   .then((response) => response.json())
    //   .then((data) => setPerrito(data))
    //   .catch((error) => console.log(error));
    axios(endpoint)
      .then((res) => {
        if (res.data.status == "success") {
          setPerrito(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <img src={perrito.message} alt="" />
    </div>
  );
};

export default ExampleFetch;
