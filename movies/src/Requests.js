import React from 'react'
// import { useNavigate } from "react-router-dom";

import axios from "./axios"
const bearer = process.env.bearer;

async function getallusers() {

  var config = {
    // data : data,
    method: 'get',
    url: '/',
    headers: {
      'Authorization': 'Bearer' + bearer,
      'Content-Type': 'text/plain'
    },

  };

  return axios(config)
    .then(function (response) {
      const x = JSON.stringify(response.data);
      console.log(response.data);
      return x;


    })
    .catch(function (error) {
      console.log(error);
    });


}




export default getallusers;