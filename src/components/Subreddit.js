import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

//list of all the posts in a subreddit

class Subreddit extends Component {
	render() {
	    console.log(this.props)
	    let postList= []
	    postList = this.props.subreddits
                
	   let posts = postList.length ? (
	       postList.map((post, index) => {
			return (
				<div className="card mb-3" key={index} >
                  <div className="row">
                    <div className="col-md-4">
                      <img src={post.data.thumbnail} className="card-img" alt="thumbnail" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <Link to={this.props.match.params.subreddit+"/"+index}><h5 class="card-title">{post.data.title}</h5></Link>
                        <div className="row">
                            <ul className="list-group list-group-horizontal">
							  <li className="list-group-item">subreddit : {post.data.subreddit}</li>
							  <li className="list-group-item">ups : {post.data.ups}</li>
							  <li className="list-group-item">comments : {post.data.num_comments}</li>
							</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				)
		})
	       ) : (
	       <h3>No post to display yet</h3>
	       )
	   
		return (
			<div className="container">
			    {posts}
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	let param = ownProps.match.params.subreddit
    return {
        subreddits: state.subreddits[param]
    }
}


export default connect(mapStateToProps)(Subreddit)

/*
if (this.props.subreddits) {//we need to populate list when store is updated
	        postList = this.props.subreddits[subredditURL].data.children
	                        .filter(obj =>{
	                           if (obj.data.thumbnail_width === null){
	                               return false
	                           } else {
	                               return true
	                           }
	                        });
	    }
*/