import React from 'react';
import NewsListRow from './NewsListRowComponent';

import Table from 'react-bootstrap/Table';
export class NewsListDisplay extends React.Component {

    renderNewsList() {
        const displayData = this.props.displayData;
        return displayData.map((id) =>
        <NewsListRow key={id.objectID} created_at={id.created_at} points={id.points} title={id.title} url={id.url} num_comments={id.num_comments} author={id.author}/>
        );
      }
    render() {
        let newsLength=false;
        this.props.displayData ? newsLength=true : newsLength=false;
        return (
           <div>{newsLength &&
                    <Table responsive={`sm`} variant={`dark`}>
                        <thead>
                            <tr>
                            <th >Comments</th>
                            <th>Vote count </th>
                            <th>upVote </th>
                            <th>News Details</th>
                            </tr>
                        </thead>
                       {this.renderNewsList()}
                    </Table>
                }
            </div>
        )
    }
}


export default NewsListDisplay;