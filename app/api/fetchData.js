// app/api/fetchData.js

export const fetchPosts = async () => {
    const response = await fetch('https://qr-dashboard.turathalanbiaa.com/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  };
  
  export const fetchVideos = async () => {
    const response = await fetch('https://qr-dashboard.turathalanbiaa.com/api/videos');
    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }
    return response.json();
  };
  