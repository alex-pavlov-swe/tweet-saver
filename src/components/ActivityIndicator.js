import React, { Component } from 'react';
import spinner from '../assets/spinner.gif';

export class ActivityIndicator extends Component {
    render() {
        return (
            <React.Fragment>
                <img
                    src={spinner}
                    style={{ width: '200px', margin: 'auto', display: 'block' }}
                    alt="Loading..."
                />
            </React.Fragment>
        )
    }
}

export default ActivityIndicator
