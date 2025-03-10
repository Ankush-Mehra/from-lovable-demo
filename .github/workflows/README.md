
# GitHub Workflows

This directory contains GitHub Actions workflow configurations for automating various tasks:

## deploy.yml

This workflow automatically deploys the portfolio website to GitHub Pages whenever changes are pushed to the main branch.

The workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the project
5. Configures GitHub Pages
6. Uploads the build output
7. Deploys to GitHub Pages

You can also manually trigger this workflow from the "Actions" tab in your GitHub repository.

### Versions
- Uses actions/checkout@v4
- Uses actions/setup-node@v4
- Uses actions/configure-pages@v4
- Uses actions/upload-pages-artifact@v3
- Uses actions/deploy-pages@v4
