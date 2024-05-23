
import React, { useContext } from 'react'
import {BasketContext} from "../../context/BasketProvider"
function Basket() {
    const {addBasket,decreaseBasket,removeBasket,basket}=useContext(BasketContext)
  return (
    <div>
        {
           basket.map((x)=>{
                return(
                <>
                <div className="cards" key={x._id}>
                    <div className="card">
                        <p>{x.name}</p>
                        <h2>{x.title}</h2>
                        <p>{x.price}</p>
                        <img src={x.img} alt="" />
                        <p>{x.count}</p>
                        <div onClick={()=>addBasket(x)}>+</div>
                        <div onClick={()=>decreaseBasket(x)}>-</div>
                        <div onClick={()=>removeBasket(x)}>remove</div>
                    </div>
                </div>
                </>)
            })
        }
    </div>
  )
}

export default Basket
