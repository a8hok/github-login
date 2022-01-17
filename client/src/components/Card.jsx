import { Link } from "react-router-dom";

const Card = ({ repo }) => {
  return (
    <div className="card">
      <Link className="link" to={`/repo/${repo.id}`}>
        <span className="title">{repo.name}</span>
        <br />
      </Link>
      <a href={repo.clone_url} className="link">
        {repo.clone_url}
      </a>
    </div>
  );
};

export default Card;
