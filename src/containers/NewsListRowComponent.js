import React from "react";
import {Triangleup} from './styleComponent';
import Moment from 'react-moment';

export class NewsListRow extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  
  render() {

    return (
      // border={"0px"}
      <tbody>
      <tr>
        <td>{this.props.num_comments}</td>
        <td>{this.props.points}</td>
        <td><Triangleup/></td>
        <td><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title} </a> by ({this.props.author}) <Moment fromNow>{this.props.created_at}</Moment>[Hide]</td>
        {/* <td>{this.props.url}</td> */}
        {/* <td>john@example.com</td> */}
      </tr>
    </tbody>

    );
  }
}
export default NewsListRow;