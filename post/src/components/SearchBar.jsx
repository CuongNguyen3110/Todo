import React from 'react';
import { searchString, changePage } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

    handleChange = (value) => {
        this.props.search('SEARCH', value);
        this.props.changePage('CHANGE_PAGE', 1);
    }

    render() {
        return (
            <div>
                <input 
                    className='form-control' 
                    onChange={(event) => {this.handleChange(event.target.value)}} 
                    placeholder='Search'
                    style={{marginTop: '20px'}}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    search: (type, data) => dispatch(searchString(type, data)),
    changePage: (type, data) => dispatch(changePage(type, data))
})

export default connect(null, mapDispatchToProps)(SearchBar);