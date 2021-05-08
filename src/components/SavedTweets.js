import React, { Component } from 'react';
import Tweet from './Tweet';
import ActivityIndicator from './ActivityIndicator';

export class SavedTweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: JSON.parse(localStorage.getItem("savedTweets")) || [],
            loading: false
        }
    }

    dropTweet = (e) => {
        e.preventDefault();

        const targetId = e.dataTransfer.getData('tweetId');

        if (this.state.tweets.map(tweet => tweet.id.toString()).includes(targetId)) return;

        var searchTweets = JSON.parse(localStorage.getItem("searchTwitter")) || [];

        for (var i = 0; i < searchTweets.length; i++) {
            if (searchTweets[i].id == targetId) {
                this.setState(prevState => ({
                    tweets: [...prevState.tweets, searchTweets[i]]
                }), () => {
                    localStorage.setItem("savedTweets", JSON.stringify(this.state.tweets));
                });
                break;
            }
        }
    }

    dragOver = (e) => {
        e.preventDefault();
    };

    removeTweet = (tweetId) => {
        const { tweets } = this.state;

        this.setState({
            tweets: tweets.filter(tweet => tweet.id != tweetId)
        }, () => {
            localStorage.setItem("savedTweets", JSON.stringify(this.state.tweets));
        });
    }

    removeAllSavedTweets() {
        this.setState({ tweets: [] });
        localStorage.setItem("savedTweets", JSON.stringify([]));
    }

    render() {
        const { loading, searchString, tweets } = this.state;

        return (
            <div
                className="search-twitter-contanier margin-left"
                onDrop={(e) => this.dropTweet(e)}
                onDragOver={(e) => this.dragOver(e)}
            >
                <div className="search-button-container">
                    <span className="saved-header">Saved Tweets</span>
                    <button
                        className="search-button-btn"
                        onClick={() => this.removeAllSavedTweets()}
                    >
                        Clear
                    </button>
                </div>
                <div className="tweets-container">
                    {loading ? (<ActivityIndicator />) : tweets.map(tweet => (
                        <Tweet
                            data={tweet}
                            key={tweet.id}
                            removable={true}
                            onRemove={(tweetId) => this.removeTweet(tweetId)}
                        />)
                    )}
                </div>
            </div>
        )
    }
}

export default SavedTweets;
