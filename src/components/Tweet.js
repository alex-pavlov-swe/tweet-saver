import React, { Component } from 'react';

export class Tweet extends Component {
    dragStart(e) {
        const { data } = this.props;

        e.dataTransfer.setData('tweetId', data.id);
    }

    getDate(data) {
        var date = new Date(data);
        return date.toLocaleDateString();
    }

    render() {
        const { data, removable, onRemove } = this.props;

        return (
            <div
                className="tweet-container"
                draggable={true}
                onDragStart={(e) => this.dragStart(e)}
            >
                <div className="avatar-container">
                    <img className="tweet-avatar" src={data.user.profile_image_url} />
                </div>
                <div className="body-container">
                    <div className="header-outer-container">
                        <div className="header-container">
                            <div className="username">{data.user.name}</div>
                            <div className="twitter-handle"> @{data.user.screen_name}</div>
                            <div className="tweet-date"> {this.getDate(data.created_at)}</div>
                        </div>
                        {removable ? (
                            <i
                                className="tweet-delete fas fa-times"
                                onClick={() => onRemove(data.id)}
                            />
                        ) : null}
                    </div>
                    <div className="text-container">{data.text}</div>
                </div>
            </div>
        )
    }
}

export default Tweet;
