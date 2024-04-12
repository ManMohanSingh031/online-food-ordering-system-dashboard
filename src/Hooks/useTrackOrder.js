import { useEffect, useState } from "react";
import { PARALLAXIQ_API_KEY } from "../utils/constant";
import axios from 'axios'

const useTrackOrder = () => {
  const [data, setData] = useState(undefined);
  
  const fetchData = async () => {
    const data = await axios.get(PARALLAXIQ_API_KEY);
    return data?.data;
  }


  useEffect(() => {
     fetchData().then((data)=>{
      setData(data)
      console.log(data,"new world")
     })
  }, []);

  return {
    data,setData
  }
}

export default useTrackOrder;
