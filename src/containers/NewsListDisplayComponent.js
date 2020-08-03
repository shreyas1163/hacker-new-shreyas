import React from 'react';
import NewsListRow from './NewsListRowComponent'
export class NewsListDisplay extends React.Component {

    render() {
        return (
            <div className="table-responsive">
            <table className="table">
            <thead>
                <tr>
                <th>Comments</th>
                <th>Vote count </th>
                <th>upVote </th>
                <th>News Details</th>
                </tr>
            </thead>
            <NewsListRow/>
            </table>
            </div>
        )
    }
}
export default NewsListDisplay;