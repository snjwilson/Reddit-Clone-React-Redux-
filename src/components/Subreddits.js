import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom'

// component with all the links to each subreddit
class Subreddits extends Component {
	render() {
	   return (
	       <div className="container">
    	       <ul className="list-group">
                  <li className="list-group-item text-center"><Link to="/r/alternatives">r/alternatives</Link></li>
                  <li className="list-group-item text-center"><Link to="r/pics">r/pics</Link></li>
                  <li className="list-group-item text-center"><Link to="r/gifs">r/gifs</Link></li>
                  <li className="list-group-item text-center"><Link to="r/advice">r/advice</Link></li>
                  <li className="list-group-item text-center"><Link to="r/animals">r/animals</Link></li>
                  <li className="list-group-item text-center"><Link to="r/cats">r/cats</Link></li>
                  <li className="list-group-item text-center"><Link to="r/images">r/images</Link></li>
                  <li className="list-group-item text-center"><Link to="r/photoshop">r/photoshop</Link></li>
                  <li className="list-group-item text-center"><Link to="r/battles">r/battles</Link></li>
                  <li className="list-group-item text-center"><Link to="r/hmmm">r/hmmm</Link></li>
                  <li className="list-group-item text-center"><Link to="r/all">r/all</Link></li>
                </ul>
            </div>
	       )
	}
}


export default Subreddits