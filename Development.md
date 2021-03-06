# [FREE] [eggheadio] Scale React Development with Nx [ENG, 2020]

<br/>

### 01 Create a new empty Nx Workspace

    $ cd app
    $ npx create-nx-workspace nx

```
? What to create in the new workspace [empty]

❯ Yes [Faster builds, run details, Github integration.
```

<br/>

### 02 Generate a new React app with Nx

    $ cd nx
    $ npm install @nrwl/react
    $ npx nx list @nrwl/react
    $ npx nx generate @nrwl/react:application store

```
Which stylesheet format would you like to use? [SASS]
Would you like to add React Router to this application? (y/N) [Y]
```

<br/>

### 03 [skipped] Generate new Projects for Nx with Nx Console

<br/>

### 04 Running a React App in the Browser with Nx

    $ npx nx run store:serve

http://localhost:8080/

<br/>

### 05 Install and use external npm packages in an Nx Workspace

    $ npm install @material-ui/core

<br/>

![Application](/img/pic-01.png?raw=true)

<br/>

### 06 Add Styling to a React app inside an Nx workspace

<br/>

![Application](/img/pic-02.png?raw=true)

<br/>

### 07 Configure Assets for my React app in an Nx Workspace

<br/>

### 08 Create a Shared React Library in an Nx Workspace

    $ npx nx generate @nrwl/react:lib ui-shared --directory=store

We removed generated files from folder libs/ui-shared/src/

    $ npx nx generate @nrwl/react:component header --project=store-ui-shared

```
Should this component be exported in the project? [Yes]
```

<br/>

![Application](/img/pic-03.png?raw=true)

<br/>

### 09 Generate a TypeScript library in an Nx Workspace

    $ npx nx generate @nrwl/workspace:lib util-formatters --directory=store

<br/>

### 10 Use the Nx Dependency Graph to Visualize your Monorepo Structure

    $ npx nx dep-graph

<br/>

![Application](/img/pic-04.png?raw=true)

<br/>

### 11 Create React Feature Libraries in an Nx Workspace

    $ npx nx generate @nrwl/react:lib feature-game-detail --directory=store --appProject=store

<br/>

![Application](/img/pic-05.png?raw=true)

<br/>

### 12 Create an Express Backend API in an Nx Workspace

    $ npm install --save-dev @nrwl/express
    $ npx nx generate @nrwl/express:application api --frontendProject=store

    $ npx nx run api:serve

<br/>

    http://localhost:3333/api/games/

<br/>

![Application](/img/pic-06.png?raw=true)

<br/>

    http://localhost:3333/api/games/chess-pie

<br/>

### 13 Use Run Commands to launch the API and App of an Nx Workspace

    $ npx nx run-many --target=serve --projects=api,store --parallel=true

OR

    $ npx nx run store:serveAppAndApi

<br/>

### 14 Connect to an Express.js API from a React app in an Nx Workspace

<br/>

### 15 Share and Reuse functionality with libraries in Nx

<br/>

![Application](/img/pic-07.png?raw=true)

<br/>

### 16 Share code between a React Frontend and Node.js Backend Application in Nx

    $ npx nx generate @nrwl/workspace:lib util-interface --directory=api

    $ npx nx run store:serveAppAndApi

<br/>

### 17 Use Storybook to Develop React Components in Nx

    $ npm install --save-dev @nrwl/storybook

    $ npx nx generate @nrwl/react:storybook-configuration store-ui-shared --configureCypress --generateStories

<br/>

```
? Automatically generate *.spec.ts files in the cypress e2e app generated by the cypress-configure generator? [Yes]
```

<br/>

    $ nx run store-ui-shared:storybook

http://localhost:4400/

<br/>

![Application](/img/pic-08.png?raw=true)

<br/>

### 18 Use Cypress and Storybook to test your React Components in Isolation

    $ npx nx run store-ui-shared-e2e:e2e --watch

<br/>

![Application](/img/pic-09.png?raw=true)

<br/>

### 19 Run Jest tests for a React app with Nx

    $ npx nx run store:test

<br/>

### 20 Building your React app with Nx

    // I have an errors. Some simple issues with typescript
    $ npx nx build store --configuration=production

    $ npx nx build api --configuration=production

<br/>

### 21 Linting a React app with Nx

    $ npx nx run store:lint

<br/>

### 22 Scale CI runs with Nx Affected Commands

    // $ npx nx affected:dep-graph --base=<branch_name>
    // $ npx nx affected:test --base=<branch_name>
    // $ npx nx affected:lint --base=<branch_name>

<br/>

### 22 Speed up with Nx computation Caching

    // $ npx nx affected:test --all
    // $ npx nx affected:test --all --skip-nx-cache

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
