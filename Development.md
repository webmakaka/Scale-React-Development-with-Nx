# [FREE] [eggheadio] Scale React Development with Nx [ENG, 2020]

<br/>

### 01 Create a new empty Nx Workspace

    $ cd app
    $ npx create-nx-workspace nx

```
? What to create in the new workspace [empty]

❯ Yes [Faster builds, run details, Github integration. Learn more at https://nx.
app]
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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
