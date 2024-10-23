export const fetchPosts = async () => {
  try {
    const response = await fetch("https://qr-dashboard.turathalanbiaa.com/api/posts");
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch posts:", error.message);
    throw new Error("Unable to retrieve posts at this time. Please try again later.");
  }
};
