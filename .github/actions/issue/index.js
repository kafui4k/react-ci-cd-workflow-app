const core = require("@actions/core");
const github = require("@actions/github");
const { Octokit } = require("@octokit/rest");

async function run() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    // const octokit = new github.GitHub(token);

    const octokit = new Octokit({
      auth: `${token}`,
      userAgent: "ci-cd-react-app v0.1.0"
    });

    const response = await octokit.rest.issues.create({
      // owner: github.context.repo.owner,
      // repo: github.context.repo,
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split(",") : undefined
    });
    core.setOutput("issue", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
