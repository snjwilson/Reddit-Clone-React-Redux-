import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Subreddits from './components/Subreddits';
import { BrowserRouter, Route} from 'react-router-dom';
import Subreddit from './components/Subreddit'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Subreddits} />
          <Route exact path="/r/:subreddit" component={Subreddit} />
          <Route exact path="/r/:subreddit/:post_id" component={Post} />
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
