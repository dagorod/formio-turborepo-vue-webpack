## What is this project?

This is a turbo repo project which contains three main apps:

- Root config: On a single spa project, you need to have a root project which will run all other apps simultaneously.
- Formiovite: An app which uses single-spa-vue, vite, and tries to load the formBuilder but fails.
- Workingformiovite: An app which only has vite and form.io and runs successfully.

### To run the issue

Run the following command at root level.

```
npm i
```

Run the following command to spin up the server.

```
npm run dev
```

The project will run at `localhost:9000` and display a blank screen where it should display the form.io builder. The console should display the following issue

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npm install
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```
