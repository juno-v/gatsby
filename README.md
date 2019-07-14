<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Hello-World Starer -> Blog Website
</h1>

# PROJECT SUMMARY 
This repo contains code for a blogging website utilizing GatsbyJS. <br/>
The website follows Andrew Mead's GatbsyJS Bootcamp: https://www.youtube.com/watch?v=8t0vNu2fCCM <br/> 
The starter code shipped with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

# LIVE DEMO OF WEBSITE 
Users can can look through the website that was deployed from this repo: <br/>
https://angry-bassi-7e8f67.netlify.com/

# Built With 
- GatsbyJS 
- GraphQL 
- Contentful 
- Netlify <br/>
*check package-lock and gatsby-node.js files for other dependencies/plugins*

# Prerequisites
*To install Gatsby and Node.js, it is recommended to use Homebrew. A little set-up in the beginning can save you from some headaches later on!* <br/>
*Visit https://www.gatsbyjs.org/tutorial/part-zero/ for a development environment tutorial straight from Gatsby's website*
- Node 
- NPM 
- Git 
- Gatsby CLI 

# Fork/Clone/Download

# File configurations 
1. Create a .env file outside of your folders 
2. Create an account with Contentful and Netfliy with your Github credentials. 
    - Contentful (https://www.contentful.com/) 
    - Netlify (https://www.netlify.com/)
3. In your .env file, insert the following: (*this is needed to connect to the Contentful data*)
- GATSBY_GRAPHQL_IDE=playground (*this is to use the playground version of GraphQL*)
- CONTENTFUL_SPACE_ID=yourCredentials  
- CONTENFUL_ACCESS_TOKEN=yourCredentials

# Get Started! 
1. In a terminal, type 'npm install' to get all of the dependencies into your local repo. 

  Navigate into your new site’s directory and start it up: 

  ```sh
  cd gatsby
  in your terminal run `gatsby develop`
  ```
# Open the source code and start editing
Your site is now running at http://localhost:8000<br/>
- Note: You'll also see a second link: http://localhost:8000/___graphql 
  - (*This is a tool you can use to experiment with querying your data. 
  <br/> Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)*)

# Completed features listed below 
- Able to switch between navigation tabs seamlessly 
- Responsive design 
- Integrate with Contentful's Content Management System 
  - Able to upload blogs that contain title, date, body, images, and more
- Contains useful resources in blogs to learn about GatsbyJS

# Next Steps 
- Redesign the front end to create a more personal style > tutorial's design
- Have more appealing styles, possibly add animations
- Add more blogs to share resources about GatsbyJS 
- Try integrating GatsbyJS with other CMS 

# Notes for employers 
- What was exciting about this project? 
  - I am a big fan of React. Once I found time to learn GatsbyJS through Andrew Mead's tutorial, I couldn't put it down. It was addicting to just build quickly and learn this React framework. After finishing the tutorial, I researched more into why others are interested in Gatsby, and why others have moved to Gatsby from other static site builders. I wrote about my findings in the live demo of this project. The most exciting thing about this project is that this is my first experience with integrating a Content Management System. It's a huge plus that I'm familiar with the framework. I can now use Gatsby to create websites for non-developers. Although Gatsby isn't huge at this point in time, it still has a big community within React developers and I'm excited to learn with, from, and inform others of Gatsby. 

- Personal touches that were added
  - I'm currently working on a new design layout that's different from the tutorial. But I've been adding relevent blogs posts to Gatsby to help inform others of resources that I've found helpful for myself. It includes references to other blogs, websites, tutorials, personal experience/opinions, etc. 
  - I've listed my contact information so other people who are interested in Gatsby can join my development community and learn with us. 

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, Gatsby recommend starting with their [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.


<!-- AUTO-GENERATED-CONTENT:END -->
# gatsby
