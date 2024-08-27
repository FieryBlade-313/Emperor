module.exports = {
    linters: {
      "*.{js,json,css,md,ts,tsx}": [
        "npm run lint:files",
        // Assuming prettier doesn't add any linting issues
        "prettier --write",
        // Checking if anything broke because of prettier
        "npm run lint:files",
        "git add",
      ],
    },
  };
  