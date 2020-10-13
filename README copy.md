## Available Scripts

## jest --watch mode

watch mode watches for changes and re run the code if any changes occurs

## Enzyme

is a tool create a virtual DOM for testing and allow testing without a browser

### Shallow rendering

shallow rendering https://enzymejs.github.io/enzyme/docs/api/shallow.html

Render components only one level deep.
Render Parent, but use placeholder for children but not render children component
but mount will render the whole heirarchy for component

### Access to props and state
manipulate value of props and state and test for vales

enzyme - for enzyme dependency
jest-enzyme - enzyme to speak with jest
enzyme-adapter-react-16 - what type of code to expect i.e. react-16

## Setup for enzyme in configuration file

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

use renderedComponent.debug() to print rendered component as string

CHAI has assertion library but jest have its own assertion library.

jest expect https://jestjs.io/docs/en/expect

toBeTruthy can be used for successfull render of component

## Category of test
 ### Unit test
 modular test for each component
 ### Integration
 How multiple unit work together
 ### Acceptance/E2E Test
 How a user interact with app

## Testing Trade off
 - Test behaviour not Implementation
 - Test behaviour (what app should do) instead of implementation (how it works)

## Snapshot testing
- A way to freeze a component
- Test fails if there are any changes.
- TDD is not possible
- Brittle
- Difficult to diagnose
- No intent for test

## data-test attributes
- data-test attribute test rendering
- top level of component
- why this is needed if we have class or id: 
    - id and class have uses in production app so Might get changed in the future
    - data-test is only for testing
    - conventional in could choose any name as per standard naming convention 
    - can be removed in production
## removing data-test attributes from production

- npm install --save-dev babel-plugin-react-remove-properties

- npm run eject
    it take the configuration file make editable by us and will only work on create-react-app applications.
    after this command there is all the entry of internal configuration will appear in package.json or also can be done on babel.rc
    e.g. in package.json add the below lines in babel:{ }

    "env": {
        "production": {
            "plugins": [
            ["react-remove-properties", {"properties": ["data-test"]
            ]
        }
        }
    },

- Create production build
    npm run build

then we have to serve it to static server for which we have to create a static server

npm install -g serve or yarn global add serve

serve -s build

## DRY Refactor
- Don't Repeat Yourself








