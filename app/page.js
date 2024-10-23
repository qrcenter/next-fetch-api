import Tags from '/components/Tags';
import Posts from '/components/Posts';
import Videos from '/components/Videos';

const HomePage = async () => {
  return (
    <div>
      <h1>Welcome to My Media App</h1>
      <Posts />
      <Videos />
      <Tags/>
    </div>
  );
};

export default HomePage;
