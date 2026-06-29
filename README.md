# Londonsoft Inc.

Main full-stack website for Londonsoft.ca, now built with React, TypeScript, and Tailwind.

## Set up and local run

1. Install all project dependencies for development mode
    ```bash
    npm i
    ```

2. Run the app in the development mode
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Deployment

1. Prepare the site for deployment
    ```bash
    npm run build
    ```

2. Preview the site before pushing to production [Optional]
    ```bash
    npm run preview
    ```
    Preview the app in the production mode.\
    Open [http://localhost:4173](http://localhost:4173) to view it in the browser.

3. Push the code
    ```bash
    git push
    ```
    This triggers an automatic deployment of the website on Github Pages.

## Tagging commits for release (Optional)

1. Edit version number in `package.json`

2. Create an annotated tag in the repository local
    ```bash
    git tag -a 2.7 -m "2.7"
    ```

3. Push the annotated tag created from step 2 to github
    ```bash
    git push origin 2.7
    ```
