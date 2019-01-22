import React, { Component } from 'react'
import { connect } from 'react-redux'

class BlogPost extends Component {
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center card-title red-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>

        ) : (
                <div className="center">No posts found</div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )

    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
        post: state.posts.find((post) => post.id === parseInt(id))
    }

}
export default connect(mapStateToProps)(BlogPost)