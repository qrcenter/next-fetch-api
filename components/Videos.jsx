import { fetchVideos } from "/data/videos/videosService";

const Videos = async () => {
  let videos;
  let error = null;

  try {
    videos = await fetchVideos();
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <h2>Videos</h2>
      {error && <div>Error: {error}</div>}
      <ul>
        {videos ? (
          videos.data.map((video) => <li key={video.id}>{video.title}</li>)
        ) : (
          <li>No videos available</li>
        )}
      </ul>
    </div>
  );
};

export default Videos;
