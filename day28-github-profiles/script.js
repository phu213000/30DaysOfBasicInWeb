const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?");
    addReposToCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("Problem fetching repos");
    }
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img
          src="${user.avatar_url}"
          alt="${user.name}"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio || ""}</p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>
        <div id="repos">
          <a href="#" class="repo">Repo1</a>
          <a href="#" class="repo">Repo2</a>
          <a href="#" class="repo">Repo3</a>
        </div>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}
function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value.trim();

  if (user) {
    getUser(user);
    search.value = "";
  }
});
