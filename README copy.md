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




