import React ,{ Component } from 'react';

import { connect } from 'react-redux';

import { getNews } from '../actions';

import { Container,Row } from 'react-bootstrap';


import NewsListDisplay from '../containers/NewsListDisplayComponent';
import GraphDisplay from '../containers/graphDisplayComponent';
import { BackButton } from '../containers/styleComponent';
import { withRouter } from 'react-router-dom';
import '../assests/css/NewsList.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from 'react-loader-spinner'

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state={
      pageNumber:0,
      newsDetails:{}
    }
  }
  
  componentDidMount() {
    let pageId=this.props.value ? parseInt(this.props.value.match.params.id ): 0
    this.props.getNews(pageId);
    this.props.history.push(`/news/${pageId}`);
  }

  nextPage=()=> {
    let newPageNumber = this.props.pageNumber+1;
    this.props.getNews(newPageNumber);
    this.props.history.push(`/news/${newPageNumber}`);
  }

  previousPage=()=> {
    let oldPageNumber=this.props.pageNumber-1;
    this.props.getNews(oldPageNumber);
    this.props.history.push(`/news/${oldPageNumber}`)
  }

  componentDidUpdate(prevProps) {
    if (this.props.newsData !== this.state.newsDetails) {
      this.setState({
        pageNumber:this.props.pageNumber,
        newsDetails:this.props.newsData
      })
    }
  }

  render() {

    let visibilityFirst = (this.state.newsDetails.nbPages === this.state.newsDetails.pageNumber) ? "hidden" : "visible";
    let visibilityLast = (this.state.pageNumber === 0) ? "hidden" : "visible";
    let displayNews = false; 
    let displayNoNews = false; 
    let displayData= [];
    let newData = [];
    if(( Object.keys(this.state.newsDetails).length > 0)){
      this.state.newsDetails.hits.length > 0 ?   displayNews= true : displayNoNews = true;
      
      let hideData = JSON.parse(localStorage.getItem('hideData')) || [];
      displayData = this.state.newsDetails.hits.filter((news)=>{return !hideData[news.objectID]})
      let voteData = JSON.parse(localStorage.getItem('voteCount')) || [];
      newData = displayData.map((news)=> {     
        if(voteData.hasOwnProperty(news.objectID)) {
          let newNews = Object.assign({},news);
          newNews.points = voteData[news.objectID]
          return newNews
        } else {
          return  news
        }
      })
    }
  
    return (
      <Container fluid>
        {displayNews && 
        <div>
        <Container className="container-color">
            <NewsListDisplay displayData={newData}/> 
            <BackButton onClick={()=>{this.nextPage()}}  visibility={visibilityFirst} float={`right`}>Next</BackButton>
            <BackButton onClick={()=>{this.previousPage()}}  visibility={visibilityLast} margin-right={`10%`}float={`right`}>Previous </BackButton>
            <GraphDisplay graphData={newData}/>  
        </Container>
        </div>
        }
        {!displayNews  && !displayNoNews &&
          <Row className="displaySpinner">
              <h1 > Please Wait 
                  <Loader
                    type="Puff"
                    color="#ff6600"
                    height={100}
                    width={100}
                    timeout={10000} //10 secs
                  /></h1>
          </Row>
        }
        {!displayNews  && displayNoNews &&
          <Row className="displaySpinner">
              <h1 >
                No News to dislpay please try again later ...
              </h1>
          </Row>
        }
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


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (NewsList));
