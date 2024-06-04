import { useState } from "react";
import { GetGithubUser } from "./GithubUsers";

export function NwGitHubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
    }
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Github username"
        />
        <button type="submit" className="button">
          Cerca
        </button>
      </form>

      <div>
        {usernames.map((username, index) => (
          <GetGithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}
