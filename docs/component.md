# Component

* Components are independent and reusable bits of code.
* `Export` component using `export` keyword.
    * Named export - Can have multiple export in single file
        ```javascript
        export function FirstComponent() {
            return <h1>First component</h1>
        }

        export function SecondComponent() {
            return <h2>Second component</h2>
        }
        ```
    * default export    - can have only one default export
        ```javascript
        function Welcome(props) {
            return <h2>Welcome {props.name} on first react component</h2>;
        }
        export default Welcome;
        ```
* `Import` component using `import ` keyword
    * Named export - can be import using `{}` braces
        ```javascript
        import {FirstComponent, SecondComponent} from './component/MultipleComponent';
        ```
    * default export - can be import without curly braces
        ```javascript
        import Welcome1 from './component/Welcome1';
        ```

## Functional Component

Javascript or ES6 arrow function that returns JSX react element

!> Recommended by React Team

```javascript
//Functional component using normal function
function Welcome(props) {
    return <h2>Welcome {props.name} on first react component</h2>;
}

export default Welcome;

OR

// Function using `ARROW` function 
const Welcome1 = (props) => 
    <h2>Welcome1 {props.name} from normal Arrow function</h2>


export default Welcome1;
```

## Class Component


ES6 class that extends React.Component and returns a react element (JSX)

```javascript
// Class Component
import React from 'react';

class WelcomeClassComponent extends React.Component {
    render() {
        return <h1>Welcome {this.props.name}</h1>
    }
}

export default WelcomeClassComponent;
```