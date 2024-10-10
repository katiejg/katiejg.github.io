// import logo from './logo.svg';
import './App.css';

function Home() {
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
          <p>NOTICE: This website is still in the works!</p>
          <h2 id="about">About</h2>
          <p>Hello! My name is Katie Jiang. Currently, I am a computer engineering undergraduate at Northwestern University, but I am originally from the Greater Boston area.
          Besides computer engineering, I am also interested in language learning, environmentalism, and game development.</p>
        </div>
        <div className="Section">
          <h2 id="projects">Projects</h2>
          <p>Coming soon... Please visit again in the future!</p>
        </div>
      </body>
    </div>
  );
}

export default Home;
