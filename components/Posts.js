import { fetchPosts } from "/data/posts/postsService";

const Posts = async () => {
  let posts;
  let error = null;

  try {
    posts = await fetchPosts();
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <h2>Posts</h2>
      {error && <div>Error: {error}</div>}
      <ul>
        {posts ? (
          posts.data.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <li>No posts available</li>
        )}
      </ul>
    </div>
  );
};

export default Posts;
