import React from 'react';
import { connect } from 'react-redux';
import { submitPost, changeInput, alert, changeUrl } from '../actions';

class PostForm extends React.Component {

    handleInputChange = (type, value) => {
        this.props.changeInput(type, value);
    }

    handleSubmitButton = (e) => {
        e.preventDefault();
        if (!this.props.userId || !this.props.title) {
            this.props.alert('PLEASE_INPUT');
        } else {
            this.props.addPost({
                userId: this.props.userId,
                title: this.props.title,    
                body: this.props.body
            })
            this.props.changeUrl('POSTS');
        }                  
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center' style={{ marginTop: "20px" }}>Form</h1>
                <div className='row justify-content-center'>
                    <form className='col-6' >
                    {this.props.isAlert ? <div className='alert alert-danger'>Please input userID and Post title</div> : null}
                        <div className="form-group">
                            <label >UserID<span className='text-danger'>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter userID"
                                onChange={(event) => { this.handleInputChange('USER_ID_CHANGE', event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label >Post title<span className='text-danger'>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Post title" 
                                onChange={(event) => { this.handleInputChange('TITLE_CHANGE', event.target.value) }} />
                        </div>
                        <div className="form-group">
                            <label >Post body</label>
                            <textarea
                                type="text"
                                rows="5"
                                className="form-control"
                                placeholder="Enter Post body" 
                                onChange={(event) => { this.handleInputChange('BODY_CHANGE', event.target.value) }} />
                        </div>                     
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmitButton}>                               
                            Submit
                        </button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const { inputChangeReducer, alertReducer } = state;
    return {
        userId: inputChangeReducer.userId,
        title: inputChangeReducer.title,
        body: inputChangeReducer.body,
        isAlert: alertReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addPost: (data) => dispatch(submitPost(data)),
    changeInput: (type, data) => dispatch(changeInput(type, data)),
    alert: (type) => dispatch(alert(type)),
    changeUrl: (type) => dispatch(changeUrl(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);