import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketProvider";
import "./Home.scss";

function Home() {
  const { addBasket } = useContext(BasketContext);
  const [data, setData] = useState([]);
  async function getAllData(params) {
    const response = await fetch("http://localhost:3000/product/");
    const movies = await response.json();
    setData(movies);
  }
  useEffect(() => {
    getAllData();
  }, []);
  function handleDelete(id) {
    fetch('http://localhost:3000/product/' + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res =>{ getAllData()})
  }
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h1>LIfeStyle Smart Watch</h1>
          <p className="text-1">Lorem, ipsum dolor.</p>
          <p className="text-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            doloribus.
          </p>
        </div>
        <div className="hero-right">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
            alt=""
          />
        </div>
      </section>
      <section className="splendid">
        <div className="splendid-left">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg"
            alt=""
          />
        </div>
        <div className="splendid-right">
          <p>MEET WITH OUR</p>
          <h2>Splendid Features</h2>
          <div className="splendid-cards">
            <div className="splendid-card">
              <div className="card-icon">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div className="card-text">
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              </div>
            </div>
            <div className="splendid-card">
              <div className="card-icon">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div className="card-text">
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              </div>
            </div>
            <div className="splendid-card">
              <div className="card-icon">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <div className="card-text">
                Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="texts">
          <p>ADJUSTABLE STRAPS</p>
          <h1>Choose the best color for your activity</h1>
        </div>
        {data.map((x) => {
          return (
            <>
              <div className="cards" key={x._id}>
                <div className="card">
                  <p>{x.name}</p>
                  <h2>{x.title}</h2>
                  <p>{x.price}</p>
                  <img src={x.img} alt="" />
                  <div onClick={() => addBasket(x)} >add</div>
                  <div onClick={() =>handleDelete(x._id)} className="delete">delete</div>
                  <Link to={`/detail/${x._id}`}>detail</Link>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
