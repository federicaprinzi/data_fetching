Esercizio Fetching Data:

- Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API;
- The component should render the user's name, login and avatar;
- Create a new GithubUsers component that has a form with a text input and a submit button;
- The input will be used for searching a user by providing their username;
- Each user will be displayed in a list, where each list item is a GithubUser component;
- These components will take username as a prop.

Esercizio Custom Hooks #3:

Extract the logic to fetch a Github user's data from the GithubUser component
from the third exercise of Context into a custom hook called useGithubUser.
