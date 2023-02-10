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

## 2.1 Setup a SvelteKit starter project

Svelte is the greatest framework in the world for building javascript components, and SvelteKit is the app framework for building Svelte apps. It is to Svelte what Next is to React.

Make sure you choose to create a typescript SvelteKit-app. Typescript is the best.

```
npm create svelte@latest op-kompdag
cd op-kompdag
npm install
npm run dev
```

## 2.2 Install sanity dependencies

```
npm i @sanity/client
```

## 2.3 Create a +page.ts file to load data

In Svelte a route can be accompanied by a load file that provides data for the components in the route. The load-file is named +page.ts. Write some code to fetch data from our sanity project (or copy the code from the lab instructions /sveltekit-files/+page.svelte)

You will need to provide credentials for your sanity.io app which can be found at sanity.io/manage

You will also need to set CORS-settings for your sanity.io app
Go to sanity.io/manage and find CORS-settings under the API-heading

## 2.4 Write Svelte-components

A suggested project structure is to create components for Conference, Days, Talks and Speakers. It is also good to have a types-file in the lib-directory. The types should mirror the types you created in Sanity-studio.

Your project structure could then look like this:

```
src
├── app.css
├── app.html
├── lib
│   └── types.ts
└── routes
    ├── +layout.svelte
    └── [slug]
        ├── +page.svelte
        ├── +page.ts
        ├── Conference.svelte
        ├── Days.svelte
        ├── Speakers.svelte
        └── Talks.svelte

```

## 2.5 (Optional but cool) Install tailwind-css

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
```

Configure template paths in tailwind.content.cjs:

```
content: ['./src/**/*.{html,js,svelte,ts}'],
```

Create a +layout-page which imports the css

Add tailwind directives to a file called app.css in root

See example files in the lab instructions

# 3. Vercel

Vercel is a hosting site for frontend apps. This is where we will host our SvelteKit app.

## 3.1 Push code to github

The easiest way to deploy with vercel is via github. Push your code to a github repo.
Create a github repo on github.com and the run the following:

```
git init -b main
git add .
git commit -a -m "Initial commit"
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPO.git
git push -u origin main
```

## 3.2 Log in to vercel

Got to vercel.com and sign in with your github account. Create a new project and point it to your newly pushed repository.

Press Deploy.

Done.

# 4. Further labs

## 4.1 Deploy the Sanity studio to Vercel

Try deploying Sanity studio to Vercel

## 4.2 Add auth to Sanity

The Sanity API is public. Try making it authenticated
