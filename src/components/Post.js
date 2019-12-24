import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ModalImage from 'react-modal-image';

//component that loads each post in detail

class Post extends Component {
	render() {
		const post = this.props.post.data;
		console.log(post)
		//console.log(this.props);
		console.log(post.thumbnail)
		return(
			<div className="container card padded-div">
				<div className="row no-gutters">
					<div className="col-sm-12">
						<div>
							<div><Link to={"/r/"+this.props.match.params.subreddit}><h5>{post.subreddit_name_prefixed.toLowerCase()}</h5></Link></div>
						</div>
						<div>
							<h3 className="post-title"><strong>{post.title}</strong></h3>
						</div>
						<div>
							<ModalImage className="small-grey-border center-display" small={post.thumbnail} large={post.thumbnail} alt="thumbnail" />
						</div>
						<div className="padded-div list-center-container">
							<div>
								<ul className="list-group list-group-horizontal list-center-div">
								  <li className="list-group-item">subreddit : {post.subreddit}</li>
								  <li className="list-group-item">ups : {post.ups}</li>
								  <li className="list-group-item">comments : {post.num_comments}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	let subreddit_id = ownProps.match.params.subreddit
	let post_id = ownProps.match.params.post_id
    return {
        post: state.subreddits[subreddit_id][post_id]
    }
}

export default connect(mapStateToProps)(Post);
