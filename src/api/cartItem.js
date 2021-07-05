import axios from "axios";

export async function addCartItem(quantity ,ingredientId, usersId) {
    try {
        console.log({
            quantity: quantity,
            ingredientId: ingredientId,
            usersId: usersId,
            ordersId: null})
        return await axios
          .post("/api/cartItems/cartPost", {
            quantity: quantity,
            ingredientId: ingredientId,
            usersId: usersId,
            ordersId: null
          })
          .then(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
      } catch (err) {
        console.error(err);
      }
}

export async function deleteCartItem(id) {
    try {
        const { data } = await axios.delete(`/api/cartItems/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getUsersCurrentCartItems(usersId) {
    try { 
        const { data } = await axios.get(`/api/cartItems/${usersId}`);
        console.log(data, "THIS IS WHAT THE BACKEND IS RETURNING FRO CART ITEMS BY USERS")
        return data;
    } catch (error) {
        throw error;
    }
}

export async function addOrderIdToCartItems(id, orderId) {
  try {
    const { data } = await axios.patch(`api/cartItems/${id}`, {
      orderId
    })
    return data
  } catch(error) {
    throw error
  }
}

// export async function updateCartItems(id) {
//   try {
//     const { data } = await axios.patch(`api/${}`)
//   } catch(error) {

//   }
// }