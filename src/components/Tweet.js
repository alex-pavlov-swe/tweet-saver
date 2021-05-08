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

    processTweet() {
        const { data } = this.props;

        var words = data.text.split(" ");
        var processedTweet = [];

        words.forEach(word => {
            if (word.length > 0 && word[0] == "@") {
                processedTweet.push(`<span class="retweet">${word}</span>`);
            } else {
                processedTweet.push(`<span>${word}</span>`);
            }
        });

        return processedTweet.join(" ");
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
                    <div
                        className="text-container"
                        id={data.id}
                        dangerouslySetInnerHTML={{ __html: this.processTweet() }}
                    >
                    </div>
                </div>
            </div >
        )
    }
}

export default Tweet;
