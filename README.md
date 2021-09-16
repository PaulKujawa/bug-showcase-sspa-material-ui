# bug-showcase-sspa-material-ui

Show case of how material's theming seems to conflict with in-browser modules.

## Description

Namely, only the components loaded in the same way as the `ThemeProvider` component seems to get the theme.

`@material-ui/core` is registred as in-browser module the importmap of the [root-config](https://github.com/PaulKujawa/bug-showcase-sspa-material-ui/blob/fc2ecb5d394ced0fbf27dc8ea575e0873ec52933/root-config/src/index.ejs#L40) and then marked as Webpack external [in the demo app](https://github.com/PaulKujawa/bug-showcase-sspa-material-ui/blob/fc2ecb5d394ced0fbf27dc8ea575e0873ec52933/app/webpack.config.js#L16).
Now, one component is loaded as in-browser module while the other is loaded from npm. Depending on how the ThemeProvider is loaded, either one of these two components gets the custom theme while the other fallbacks to material's default theme as can be seen [in the root-component](https://github.com/PaulKujawa/bug-showcase-sspa-material-ui/blob/fc2ecb5d394ced0fbf27dc8ea575e0873ec52933/app/src/root.component.tsx#L2-L25).

This was tested on v4 (`main` branch) and v5 on branch `material-v5`.

## To run / see the visuals

run `npm install && npm start` in both folders. Open https://localhost:8080/pkujawa-demo-app.js to make sure your browser does not block the server running on HTTPS without a certificate. Now, open http://localhost:9000/ and you should see two components using different themes. 

<img width="388" alt="Screenshot 2021-09-16 at 18 23 01" src="https://user-images.githubusercontent.com/2843557/133652304-0b687cac-f65d-4efb-a758-2b873807e252.png">
