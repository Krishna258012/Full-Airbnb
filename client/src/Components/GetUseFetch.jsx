import React, { useEffect, useState } from "react";
import axios from "axios";
const GetUseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{setData(data)
    setIsLoading(false)
    })
  //   axios.get(url)
  // .then(response => response.data)
  // .then(data => setData(data));
  },[url])

  return [data,isLoading];
};

export default GetUseFetch;
