import React ,{ Component }from "react";
import {Triangleup} from './styleComponent';
import Moment from 'react-moment';
import '../assests/css/NewsListRow.css'

export class NewsListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        voteCount: (this.props.points === null) ? 0 : (this.props.points),
        hide: false,
    };
  }
  addVoteCount=()=> {

    let currentVoteCount=this.state.voteCount;
    currentVoteCount++;
    let voteCount=JSON.parse(localStorage.getItem('voteCount'))||{};
    voteCount[this.props.objectID]=currentVoteCount; 
    localStorage.setItem('voteCount', JSON.stringify(voteCount));
    this.setState({voteCount:currentVoteCount}); 
    window.dispatchEvent(new Event('updateVotes'));

  }
  hideStory=()=> {
    let hideData=JSON.parse(localStorage.getItem('hideData'))||{};
    hideData[this.props.objectID]=true;
    localStorage.setItem('hideData', JSON.stringify(hideData));
    this.setState({hide:true});
    window.dispatchEvent(new Event('hide'));

  }

  render() {
   
    
    return (
      <tbody>
         {  !this.state.hide && 
      <tr>
        <td>{ (this.props.num_comments === null) ? 0 : (this.props.num_comments) }</td>
        <td>{this.state.voteCount }</td>
        <td><span onClick={this.addVoteCount}><Triangleup/></span></td>
        <td><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title} </a> by ({this.props.author}) <Moment fromNow>{this.props.created_at}</Moment><span onClick={this.hideStory} className='enableCursor'>[Hide]</span></td>
      </tr>

    }
    </tbody>

    );
  }
}
export default NewsListRow;