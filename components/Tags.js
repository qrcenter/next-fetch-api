import { fetchTags } from "/data/tags/tagsService";

const Tags = async () => {
  let tags;
  let error = null;

  try {
    tags = await fetchTags();
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <h2>Tags</h2>
      {error && <div>Error: {error}</div>}
      <ul>
        {tags ? (
          tags.data.map((tag) => <li key={tag.id}>{tag.name}</li>)
        ) : (
          <li>No tags available</li>
        )}
      </ul>
    </div>
  );
};

export default Tags;
