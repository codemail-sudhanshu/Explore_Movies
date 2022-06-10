import React from 'react'
import { useState } from 'react';

function Home() {
    const mc = document.getElementById("mc");
    // useState
const [isloading, setisloading] = useState(true)
    const APIURL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";


    const suggs = document.getElementById("suggs");

    const sbardiv = document.querySelector(".searchbar");









    const resp = new XMLHttpRequest();
    resp.open("GET", APIURL);
    resp.send();
    resp.onload = function () {
        const movies = JSON.parse(resp.response).results;
        showmovie(movies);
    };
const [moviesdata, setmoviesdata] = useState([]);
    function empty() {
        const empty = document.createElement("div");


        empty.classList.add("empty");
        empty.innerText = "No movie found";

        empty.appendChild(document.createElement("br"));

    }

    function showmovie(mov) {
    
   
        if (mov.length == 0) {
            empty();
        } else {
            const arr = Array.from(mov);


            arr.forEach((move) => {
                const mbox = document.createElement("div");

                const { poster_path, title, vote_average } = move;
                var ip = IMGPATH + poster_path;

                mbox.classList.add("boxc");
                console.log(poster_path);
                if (poster_path === null) {
                    ip = "i.jpg";
                }

                const x = `<div class="box">
                  <div class="image">
                      <img src="${ip}" class="img" alt="" />
                  </div>
  
                  <div class="tistle">
                    ${title}
                      <div class="rating" style="background-color:${getcolor(
                    vote_average
                )} ;">
          ${vote_average}
              </div>
                  </div>
                  
              </div>
            
  
         `;
moviesdata.push(x);

            });
            console.log(moviesdata);
        }
    }

    function getcolor(num) {
        if (num > 7) return "green";
        else return "orange";
    }

 
    function SEARCH(event) {
        const sbar = document.getElementById("sb");
setisloading(true);

        const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${sbar.value}`;
        const searching = new XMLHttpRequest();
        searching.open("GET", SEARCHAPI);
        searching.send();
        searching.onload = function () {
setisloading(false);

            const searchval = JSON.parse(searching.response).results;
            var sugar = [];
            sugar = Array.from(searchval);

            if (sugar.length == 0) {
                const c = document.getElementById("mc");
                empty();

            }

            else showmovie(sugar);


        }
            ;
    }




    return (
        <div class="main">
            <div class="searchbar" >
                <input type="text" placeholder="Search Movies" class="sbar" id="sb" onChange={(E) => SEARCH(E)} />

{/* {isloading?"loading":""} */}

            </div>
            <div class="main-cont" id="mc">

            </div>
        </div>
    )
}

export default Home