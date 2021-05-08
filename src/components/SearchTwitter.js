import React, { Component } from 'react';
import Tweet from './Tweet';
import ActivityIndicator from './ActivityIndicator';

const getTweetsUrl = 'http://localhost:5001/search/tweets';

export class SearchTwitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            tweets: JSON.parse(localStorage.getItem("searchTwitter")) || [],
            loading: false
        }
    }

    componentDidMount() { }

    handleSearchClick() {
        const { searchString } = this.state;

        if (searchString === "") {
            alert("Please enter something to a Search Input");
            return;
        }

        this.setState({ loading: true, tweets: [] });

        fetch(getTweetsUrl + `?search=${searchString}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ tweets: data.statuses });
                localStorage.setItem("searchTwitter", JSON.stringify(data.statuses));
            }).catch(error => {
                alert("Oops! Something went wrong");
            }).finally(() => {
                this.setState({ loading: false });
            })
    }

    searchChange(e) {
        this.setState({ searchString: e.target.value });
    }

    render() {
        const { loading, searchString, tweets } = this.state;

        return (
            <div className="search-twitter-contanier margin-right">
                <div className="search-button-container">
                    <input
                        className="search-button-input"
                        placeholder="Search Twitter"
                        value={searchString}
                        onChange={(e) => this.searchChange(e)}
                    />
                    <button
                        className="search-button-btn"
                        onClick={() => this.handleSearchClick()}
                    >
                        Search
                    </button>
                </div>
                <div className="tweets-container">
                    {loading ? (<ActivityIndicator />) : tweets.map(tweet => (
                        <Tweet
                            data={tweet}
                            key={tweet.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default SearchTwitter;
