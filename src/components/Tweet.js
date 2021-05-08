import React, { Component } from 'react';

export class Tweet extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="tweet-container" draggable={true}>
                <p>User: {data.user.name}</p>
                <p>Screen Name: @{data.user.screen_name}</p>
                <p>Created at: {data.created_at}</p>
                <p>Text: {data.text}</p>
                <img src={data.user.profile_image_url} />
            </div>
        )
    }
}

export default Tweet;
