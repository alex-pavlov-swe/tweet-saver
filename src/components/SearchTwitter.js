import React, { Component } from 'react';
import Tweet from './Tweet';

const getTweetsUrl = 'http://localhost:5001/search/tweets';

export class SearchTwitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: JSON.parse(localStorage.getItem("searchTwitter")) || []
        }
    }

    componentDidMount() { }

    handleSearchClick(searchQuery) {
        fetch(getTweetsUrl + `?search=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ tweets: data.statuses });
                localStorage.setItem("searchTwitter", JSON.stringify(data.statuses));
            });
    }

    render() {
        const { tweets } = this.state;

        return (
            <div className="search-twitter-contanier">
                <div className="search-button-container">
                    <input
                        className="search-button-input"
                        placeholder="Search Twitter"
                    />
                    <button
                        className="search-button-btn"
                        onClick={() => this.handleSearchClick("coquitlam")}
                    >
                        Search
                    </button>
                </div>
                {tweets.map(tweet => <Tweet data={tweet} key={tweet.id} />)}
            </div>
        )
    }
}

export default SearchTwitter;
