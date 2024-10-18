// app/page.js

import Posts from './components/Posts';
import Videos from './components/Videos';

const HomePage = async () => {
  return (
    <div>
      <h1>Welcome to My Media App</h1>
      <Posts />
      <Videos />
    </div>
  );
};

export default HomePage;
