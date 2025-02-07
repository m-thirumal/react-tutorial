// Class Component
import React from 'react';

class WelcomeClassComponent extends React.Component {
    render() {
        return <h1>Welcome {this.props.name}</h1>
    }
}

export default WelcomeClassComponent;