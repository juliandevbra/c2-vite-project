import axios from "axios";
import React, { useEffect, useState } from "react";

const AsyncAwait = () => {
  const [gatito, setGatito] = useState({});
  const endpoint = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    // const fetchData = async () => {
    //   let res = await fetch(endpoint);
    //   let data = await res.json();
    //   setGatito(data[0]);
    // };
    // fetchData();

    const axiosData = async () => {
      let res = await axios(endpoint);
      setGatito(res.data[0]);
    };
    axiosData();
  }, []);

  return (
    <div>
      <img src={gatito.url} alt="" />
    </div>
  );
};

export default AsyncAwait;
