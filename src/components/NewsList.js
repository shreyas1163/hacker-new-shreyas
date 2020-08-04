import React ,{ Component } from 'react';
import { connect } from 'react-redux';

import { getNews } from '../actions';

import {Container} from 'react-bootstrap';

import NewsListDisplay from '../containers/NewsListDisplayComponent';
import GraphDisplay from '../containers/graphDisplayComponent';
import {BackButton } from '../containers/styleComponent';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state={
      pageNumber:0,
      newsDetails:{}
    }
  }
  
  componentDidMount() {
    this.props.getNews(this.props.pageNumber);
  }
  nextPage=()=> {
    console.log("hello");
    let newPageNumber=this.props.pageNumber+1
    this.props.getNews(newPageNumber);
  }
  previousPage=()=> {
    let oldPageNumber=this.props.pageNumber-1
    this.props.getNews(oldPageNumber);
  }

  componentDidUpdate(prevProps) {
    if (this.props.newsData !== prevProps.newsData) {
      this.setState({
        pageNumber:this.props.pageNumber,
        newsDetails:this.props.newsData
      })
    }
  }

  render() {
    let visibilityFirst = (this.props.newsData.nbPages === this.props.pageNumber) ? "hidden" : "visible";
    let visibilityLast = (this.props.pageNumber === 0) ? "hidden" : "visible";
    console.log(this.props.pageNumber);
    return (
      <Container fluid={"md"} >
        <Container>
            <NewsListDisplay displayData={this.props.newsData.hits}/> 
        </Container>
        <BackButton onClick={()=>{this.nextPage()}}  visibility={visibilityFirst} float={`right`}>Next Page</BackButton>
        <BackButton onClick={()=>{this.previousPage()}}  visibility={visibilityLast} margin-right={`10%`}float={`right`}>Previous Page</BackButton>
        <Container>
          <GraphDisplay/>  
        </Container>
                
        
       
      </Container>     
      )
  }
}

const mapStateToProps = (state) => {
  return {
    pageNumber : state.pageNumber,
    newsData : state.newsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
      getNews: (pageNumber)=>{dispatch(getNews(pageNumber))}
    };
}


export default connect(mapStateToProps,mapDispatchToProps) (NewsList);
