import React, { createContext, useState } from "react";
export const WishContext = createContext();
function WishProvider({children}) {
  const [wish, setWish] = useState();
  function addWish(item) {
    const index = wish.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      wish[index].count++;
      setWish([...wish]);
    } else {
      setWish([...basket, { ...item, count: 1 }]);
    }}
    function decreaseWish(item) {
        const index = wish.findIndex((x) => x._id === item._id);
        if (basket[index].count>1) 
          wish[index].count--;
          setWish([...wish]);
        } 
         

  function removeWish(item) {
    setWish(wish.filter((x)=>x_id!==item._id))
}
  return (
    <div>
        <BasketContext.Provider value={{addWish,wish,decreaseWish,removeWish}}>
            {children}
        </BasketContext.Provider>
      
    </div>
  )
}
export default WishProvider;
