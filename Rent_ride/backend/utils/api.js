// utils/api.js
export const BASE_URL = "http://localhost:5000/api";

export const postRequest = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    return { message: "Server error" };
  }
};
