# GitHub Jobs

![GitHub Jobs Demo](github-jobs-demo.gif)

**_A React JS app built using the [GitHub Job](https://jobs.github.com) API and [Material-UI](https://material-ui.com) styling._** You can search for your first or next job among all the listed jobs, use filters to narrow your results and be specific to what you are looking for.

This project is made for showcasing my work with **_API skills_** and using any styling **_library_** or **_framework_**. This project took me around four days to build, styling part took most time because I used Material UI for the first time.

## Features

1. Fully responsive
1. Can apply different filters to narrow search results
1. Supports Dark and Light Mode, applies it as per the user's set preference on their device and can also switch it anyway
1. Takes advantage of **React Hooks** like _'useMemo, useEffect, useReducer'_ to re-render components when changed and this boosts performance

## Built with

-   [Axios](https://axios-http.com) :- For interacting with the API.
-   [Markdown to JSX](https://www.npmjs.com/package/markdown-to-jsx) :- For converting received Markdown response into HTML.
-   Material-UI { [core](https://material-ui.com/getting-started/installation), [icons](https://material-ui.com/components/icons), [lab](https://material-ui.com/components/about-the-lab) } :- For styling the UI & UX.

## Getting Started

These instructions will help you to setup your own copy of Github Jobs on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisite

-   Git
-   Yarn or NPM

> _**NOTE:** This guide follows Yarn as package manager because this app was built using Yarn. Steps for NPM would be quite similar but consider reading some guide._

### Installation

1. Clone this repo
1. Install all the dependencies

    ```bash
    yarn
    ```

1. Tweak the code
1. Run on local server

    ```bash
    yarn start
    ```

## Deployment

1. Create a new repo
1. Push your code to it
1. Create New Project on your [Vercel Dashboard](https://vercel.com/dashboard)
1. Import your Git Repository
1. After successful import, changes made to the Production Branch (commonly "main/master") will be a Production Deployment and rest all branches will generate Preview Deployments.
1. Once deployed, you will get a URL for your live app, such as: `https://xyz.vercel.app`

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See [`LICENSE`](LICENCE) for more information.

## Resources

-   [Axios Docs](https://axios-http.com/docs/intro)
-   [React JS Hooks Docs](https://reactjs.org/docs/hooks-intro.html)
-   [GitHub Jobs API Docs](https://jobs.github.com/api)
-   [Material-UI Docs](https://material-ui.com/getting-started/installation)
- [Deploy CRA using Vercel Article](https://vercel.com/guides/deploying-react-with-vercel-cra)

> _**NOTE:** GitHub is closing its Jobs API so this app wont work after that (ref: [Article](https://github.blog/changelog/2021-04-19-deprecation-notice-github-jobs-site/)), I already know this thing but still used this API because it was hard to get access to other APIs like Indeed, Freelancer, Upwork, etc. So, I had to use this._

## Acknowledgement

- [Freeboard/thingproxy](https://github.com/Freeboard/thingproxy) :- Used for tackling CORS issue while development
