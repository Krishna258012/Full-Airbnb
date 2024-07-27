import React, { useEffect, useState } from "react";
import axios from "axios";
const GetUseFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data))
    console.log("HII full test"+data);
  //   axios.get(url)
  // .then(response => response.data)
  // .then(data => setData(data));
  },[url])

  return [data];
};

export default GetUseFetch;
