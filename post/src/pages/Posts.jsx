import React from 'react';

import { connect } from 'react-redux';
import { requestPostsFromApi, changePage } from '../actions/index';
import Paging from '../components/Pagination';
import SearchBar from '../components/SearchBar';

class Posts extends React.Component {

    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    handleButtonClick = () => {
        this.props.fetchPosts();
    }

    handlePageChange = (data) => {
        this.props.changePage('CHANGE_PAGE', data);
    }   

    render() {
        const { posts, pageNumber, pageSize, isLoading, searchString } = this.props; 
        const searchedPost = (searchString) ? posts.filter(post => post.id == searchString || post.userId == searchString ) : posts;
        const pagedPost = searchedPost.slice((pageNumber-1)*pageSize, (pageNumber-1)*pageSize + pageSize);
             
        return (
            <div className='container'>
                <button onClick={this.handleButtonClick} className="btn btn-primary">Show all posts</button>
                <SearchBar />
                <h1 className='text-center' style={{marginTop: '30px'}}>POSTS</h1>
                <div className='row justify-content-center'>
                {isLoading ? <div className='spinner-border text-primary text-center'></div> : null}
                {pagedPost.map((post) => {
                    return (
                        <div key={post.id} className='col-12 card' style={{marginTop: '20px'}}>
                            <div className='card-body'>
                                <h5 className='card-title'>Post title: {post.title}</h5>
                                <h6>User: {post.userId}</h6>
                                <h6>PostID: {post.id}</h6>
                                <p>Post body: {post.body}</p>
                            </div>
                        </div>
                    )
                })}
                
                </div>
                <div className='row justify-content-center' style={{marginTop: '10px'}}>
                    <Paging handlePageChange={this.handlePageChange} totalPosts={searchedPost} ></Paging>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const { postsReducer, loadingReducer, changePageReducer, searchString } = state
    return {
        posts: postsReducer,
        isLoading: loadingReducer,
        pageNumber: changePageReducer.pageNumber,
        pageSize: changePageReducer.pageSize,
        searchString: searchString
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPosts: () => dispatch(requestPostsFromApi()),
    changePage: (type, data) => dispatch(changePage(type, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);