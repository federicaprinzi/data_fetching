import { useGithubUser } from "../hooks/useGithubUser";

export function GetGithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Si è verificato un errore. Riprovare</h1>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} alt={`${data.login} avatar`} />
        </div>
      )}
    </div>
  );
}
