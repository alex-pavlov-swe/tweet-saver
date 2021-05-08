import SearchTwitter from './components/SearchTwitter';
import SavedTweets from './components/SavedTweets';

function App() {
    return (
        <div className="App">
            <h1>Tweet Saver</h1>
            <div className="app-container">
                <SearchTwitter />
                <SavedTweets />
            </div>
        </div>
    );
}

export default App;
