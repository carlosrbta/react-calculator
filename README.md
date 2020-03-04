# Calculator

### Demo and preview

[Demo](https://carlosrbta.github.io/react-calculator/)

![Preview](https://user-images.githubusercontent.com/1446193/75791712-bc38f080-5d4b-11ea-87f2-1922cfba0689.png)

### Constraints

- No use the `eval()` function to execute calculations
- No use the `new Function('return ${value}')()` to execute calculations

### User Stories

- [ ] User can see a display showing the current number entered or the result of the last operation.
- [ ] User can see an entry pad containing buttons for the digits 0-9, operations - `+`, `-`, `/`, `%` and `=`, a `C` button (for clear), and an `AC` button (for clear all).
- [ ] User can click the `AC` button to clear all internal work areas and to set the display to ''.
- [ ] User can click the `C` button to clear the last number or the last operation.
- [ ] User cannot start the expression with invalid operators.
- [ ] User can execute expression with parentheses like `10(20+5)` or `2\*(10+5+(2+3))`.
- [ ] User can execute expression with percents like `10%` or `100-10%` or `25%\*80`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
