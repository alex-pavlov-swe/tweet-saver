import React, { Component } from 'react';

export class SavedTweets extends Component {
    drop = e => {
        e.preventDefault();
        console.log("!!!")
    }

    dragOver = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div
                className="saved-tweets-container"
                onDrop={(e) => this.drop(e)}
                onDragOver={(e) => this.dragOver(e)}
            >
                <h2>Saved Tweets</h2>
            </div>
        )
    }
}

export default SavedTweets;
