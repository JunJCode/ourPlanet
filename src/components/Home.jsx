import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div>
      <h1>Our Planet - An educational information website</h1>
      <img
        src="https://i5.walmartimages.com/asr/cf648dda-6ba6-4139-8731-0c838767dcba_1.a79901f57fd3159cddf73f8170967885.jpeg"
        alt="funny pug"
      />
      <div className="btns-landing-page">
        <button className="btn-home">
          <Link to="/articles">Articles</Link>
        </button>
        <button className="btn-home">
          <Link to="/books">Books</Link>
        </button>
        <button className="btn-home">
          <Link to="/inf">Influencer</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
