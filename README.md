# sanity-sveltekit-vercel

Lab with Sanity, SvelteKit and Vercel

Build a conference website with Sanity.io as content management system, SvelteKit as frontend and deploy it using Vercel.

This lab is done in three steps, starting with the backend CMS.

You will need npm, git, github and preferably vscode for best mileage.

# 1. Sanity.io

## 1.1 Setup Sanity.io

Sanity.io lets us define and manage our content. Install the sanity cli and create a sanity project using the following commands:

```
npm install -g @sanity/cli
npm create sanity@latest
```

## 1.2 Create schemas

Copy the schema-files for conference, speaker, days and talk from the lab-instructions

## 1.3 Start the Sanity studio locally

Sanity studio is a react app where we can create content using the schemas we have setup

```
npm run dev
```

Add some cool content from the studio and publish it. It should now be available to the world.

# 2. SvelteKit

# 2.1 Setup a SvelteKit starter project

Svelte is the greatest framework in the world for building javascript components, and SvelteKit is the app framework for building Svelte apps. It is to Svelte what Next is to React.

```
npm create svelte@latest op-kompdag
cd op-kompdag
npm install
npm run dev
```

# 2.2 Install sanity dependencies

```
npm i @sanity/client
```

Write some code to fetch data from our sanity project (or copy the code from the lab instructions)

You will need to provide credentials for your sanity.io app which can be found at sanity.io/manage

You will also need to set CORS-settings for your sanity.io app

Write some code to display the data (or copy the code from the lab instructions)

# 3. Vercel

Vercel is a hosting site for frontend apps. This is where we will host our SvelteKit app.

## 3.1 Push code to github

The easiest way to deploy with vercel is via github. Push your code to a github repo

```
git init
```

## 3.2 Log in to vercel

Got to vercel.com and sign in with your github account. Create a new project and point it to your newly pushed repository.

Press Deploy.

Done.
