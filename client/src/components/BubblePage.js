import React, { useState, useEffect } from "react";
import { AxiosWithAuth as axios } from "../utils/AxiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios().get('http:localhost:5000/api/colors')
      .then(res => {
        console.log(res.data)
        if(localStorage.getItem('token')){
          setColorList(
            res.data
          )
        }
      })
      .catch(err => console.log(err))
  }, [refresh])



  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
