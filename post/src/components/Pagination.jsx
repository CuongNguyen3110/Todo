import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';

class Paging extends React.Component {

    render() {
            
        const { totalPosts, pageSize, pageNumber } = this.props;
        let totalPages = Math.ceil(totalPosts.length / pageSize);

        console.log(totalPosts.length)

        return (
            <div>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink 
                            first 
                            onClick={() => {this.props.handlePageChange(1)}}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink 
                            previous 
                            disabled={pageNumber === 1 ? true : false}
                            onClick={() => {this.props.handlePageChange(pageNumber - 1)}}/>
                    </PaginationItem>

                    <PaginationItem active>
                        <PaginationLink> 
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink 
                            next 
                            disabled={pageNumber === totalPages ? true : false}
                            onClick={() => {this.props.handlePageChange(pageNumber + 1)}}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink 
                            last 
                            onClick={() => {this.props.handlePageChange(totalPages)}}/>
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {

    const { changePageReducer } = state

    return {
        pageNumber: changePageReducer.pageNumber,
        pageSize: changePageReducer.pageSize
    }
}

export default connect(mapStateToProps)(Paging);