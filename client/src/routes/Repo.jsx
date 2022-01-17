import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Repo = ({ user }) => {
  const [data, setData] = useState([]);

  const { repos_url, gists_url } = user._json;

  console.log(user._json);
  // Fetch repo data from the API.
  useEffect(() => {
    async function fetchRepoData() {
      try {
        const result = await axios(repos_url);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRepoData();
  }, []);

  return (
    <div className="post">
      <div className="home">
        {data.length && data.map((repo) => <Card key={repo.id} repo={repo} />)}
      </div>
      {!data.length && <div>No Repo's to display</div>}
    </div>
  );
};

export default Repo;
