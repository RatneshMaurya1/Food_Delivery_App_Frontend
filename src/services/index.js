const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const userSignUp = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};
export const userSignIn = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getImage = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/image`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};
export const getFoodItem = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/card`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};
export const getUserReview = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/review`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const createCart = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getCartItem = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const DeleteCartItemById = async (cardId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/cart/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getCheckoutItem = async (cartId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/cart/${cartId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getShareLink = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/cart/share`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const userAddress = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/address`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getUserAddress = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/address`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};
export const updatedUserAddress = async (data,addressId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/address/${addressId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const DeleteUserAddressById = async (addressId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/address/${addressId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const getaddressById = async (addressId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/address/${addressId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const userDebitCard = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/debitCard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};

export const UserCard = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/debitCard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};
export const updatedDebitCard = async (data,userCardId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/debitCard/${userCardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error(error.message || "An unexpected error occurred");
  }
};