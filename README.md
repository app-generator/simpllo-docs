# [Docusaurus Soft Design](https://github.com/app-generator/docusaurus-soft-design)

**Open-Source Docusaurus Starter** styled with [Soft UI Design](https://bit.ly/soft-design-system), an open-source design from `Creative-Tim` - Actively supported by [AppSeed](https://appseed.us/).

- 👉 [Docusaurus Soft Design](https://docusaurus-soft-design.onrender.com) - `LIVE Demo`
- 👉 [Docusaurus Soft Design](https://www.youtube.com/watch?v=uRgQ_TpTj4g) - `video presentation`
- 🚀 Free [support](https://appseed.us/support/) (email & `Discord`)

<br />

> **Features**

- ✅ **Docusaurus v2** 
- 🚀 `Blazing Fast` 
- ✅ Modern UI: **[Soft UI Design](https://bit.ly/soft-design-system)**, `Dark-Mode`
- ✅ `MIT License`, Free **Support**  
- ✅ **404 Events Reporting** via `Email.JS` 
- ✅ [Sticky Videos](https://docusaurus-soft-design.onrender.com/docs/tutorial-extras/sticky-media) for `YouTube`

<br />

![Docusaurus Soft UI Design - Open-source DOCS Starter.](https://user-images.githubusercontent.com/51070104/221350480-512c0088-84dd-49ac-a277-c09d0449054a.jpg)

<br />

### Installation

-   yarn
    ```sh
    yarn
    ```
-   npm
    ```sh
    npm install
    ```
-   pnpm
    ```sh
    pnpm install
    ```

### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

-   yarn
    ```sh
    yarn start
    ```
-   npm
    ```sh
    npm run start
    ```
-   pnpm
    ```sh
    pnpm run start
    ```

### Build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

-   yarn
    ```sh
    yarn build
    ```
-   npm
    ```sh
    npm run build
    ```
-   pnpm
    ```sh
    pnpm run build
    ```

### Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Using SSH:

-   yarn
    ```sh
    USE_SSH=true yarn deploy
    ```
-   npm
    ```sh
    USE_SSH=true npm run deploy
    ```
-   pnpm
    ```sh
    USE_SSH=true pnpm run deploy
    ```

Not using SSH:
> Note: when prompted for password, enter personal access token.
-   yarn
    ```sh
    GIT_USER=<Your GitHub username> yarn deploy
    ```
-   npm
    ```sh
    GIT_USER=<Your GitHub username> npm run deploy
    ```
-   pnpm
    ```sh
    GIT_USER=<Your GitHub username> pnpm run deploy
    ```

<br />

### `404 Events` Reporting via [Email.JS](https://www.emailjs.com/)

This feature might be useful when we need to log the these events in order to add the missing pages or the corespondent `301` redirects. 

```bash
$ cp env.sample .env
$ vi .env
```

Edit email credentials: 

```env
EMAILJS_SERVER_ID=REAL_VALUE_HERE
EMAILJS_TEMPLATE_ID=REAL_VALUE_HERE
EMAILJS_PUBLIC_KEY=REAL_VALUE_HERE
```

<br />

## Links & Resources

- 👉 Contact `AppSeed` using the [support](https://appseed.us/support/) page
- 👉 [Migrate from GitBook to Docusaurus](https://docs.appseed.us/gitbook-to-docusaurus-migration/) - `step-by-step` guide

--- 
[Docusaurus Soft Design](https://github.com/app-generator/docusaurus-soft-design) - `Free DOCS Starter` provided by **[AppSeed](https://appseed.us/)**.
