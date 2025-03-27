// import logo from './logo.svg';
import './App.css';
import Post from './portfolio/Post';
import Portfolio from './portfolio/Portfolio';
import Blog from './portfolio/posts.json';

function Home() {
  console.log(Blog)
  return (
    <div className="Home">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World!</code> Is anyone there?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <div className="Section">
          <h2 id="projects">Projects</h2>
          <p>Coming soon... Please visit again in the future!</p>
          <Post />
          <Portfolio />
        </div>
      </body>
    </div>
  );
}

export default Home;
