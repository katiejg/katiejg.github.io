import './App.css';

function Post({ post }) {
      return (
            <div className="Post">
                  <a href={post.url}>
                        <h3>{post.title}</h3>
                        <p>{post.date}</p>
                  </a>
            </div>
      );
}