## What is this project?

This is a turbo repo project which contains Vue + Vite + Singlespa all spread in three main apps:

- Root config: On a single spa project, you need to have a root project which will run all other apps simultaneously.
- Formiovite: An app which uses single-spa-vue, vite, and tries to load the form builder but fails.
- Workingformiovite: An app which has vite and form.io and runs successfully.

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
![Screen Shot 2023-09-22 at 4 25 18 PM](https://github.com/dagorod/formio-turborepo-vue-webpack/assets/58822367/5e3662da-4ef7-4a26-82ae-59b1a3ce0a2d)


### The working app

To view the working vite + form.io app visit `localhost:3002`. You should see a display of the form.io side bar options (not styled).
