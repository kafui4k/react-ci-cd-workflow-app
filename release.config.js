module.exports = {
  release: {
    branches: ["master", "next"],
    repositoryUrl: "https://github.com/kafui4k/react-ci-cd-workflow-app",
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        {
          assets: [
            {
              path: "build.zip",
              label: "Build"
            },
            {
              path: "coverage.zip",
              label: "Coverage"
            }
          ]
        }
      ]
    ]
  }
};
