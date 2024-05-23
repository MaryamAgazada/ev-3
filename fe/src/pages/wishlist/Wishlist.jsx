import React, { useContext } from 'react'
import { WishContext } from '../../context/WishProvider'

function Wishlist() {
    const {wish,addWish,decreaseWish,removeWish}=useContext(WishContext)
  return (
    <div>
     {
           wish.map((x)=>{
                return(
                <>
                <div className="cards" key={x._id}>
                    <div className="card">
                        <p>{x.name}</p>
                        <h2>{x.title}</h2>
                        <p>{x.price}</p>
                        <img src={x.img} alt="" />
                        <p>{x.count}</p>
                        <div onClick={()=>addWish(x)}>+</div>
                        <div onClick={()=>decreaseWish(x)}>-</div>
                        <div onClick={()=>removeWish(x)}>remove</div>
                    </div>
                </div>
                </>)
            })
        }
    </div>
  )
}

export default Wishlist
