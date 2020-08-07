import React from 'react';
import NewsListRow from './NewsListRowComponent';
import '../assests/css/ListDisplayComponent.css';
import Table from 'react-bootstrap/Table';
import {Container} from 'react-bootstrap';

export class NewsListDisplay extends React.Component {

    renderNewsList() {
        const displayData = this.props.displayData;
        // let hideData=JSON.parse(localStorage.getItem('hideData'))||[];

        // const displayData = this.props.displayData.filter((item)=>{return !hideData[item.objectID]})
         return displayData.map((id) =>
        <NewsListRow key={id.objectID} objectID={id.objectID} created_at={id.created_at} points={id.points} title={id.title} url={id.url} num_comments={id.num_comments} author={id.author}/>
        );
      }
    render() {
        let newsLength=false;
        this.props.displayData ? newsLength=true : newsLength=false;
        return (
           <Container fluid> { newsLength &&        
                <Table responsive hover="true">
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
            </Container>
        )
    }
}


export default NewsListDisplay;