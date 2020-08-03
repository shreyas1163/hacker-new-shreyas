import React ,{ Component } from 'react';
import { connect } from 'react-redux';

import { getNews } from '../actions';

import {Container,Col} from 'react-bootstrap';

import NewsListDisplay from '../containers/NewsListDisplayComponent';
import GraphDisplay from '../containers/graphDisplayComponent';


class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state={
      pageNumber:0,
      newsDetails:''
    }
  }
  
  componentDidMount() {
    this.props.getNews(this.props.pageNumber);
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
    return (
      <Container fluid={"md"} >
        <div className="row row-cols-2">
          <Col ColSize={10}> 1 of 4</Col>
          <div className="col bg-warning">2 of 4</div>
          <div className="col bg-success">3 of 4</div>
          <div className="col bg-warning">4 of 4</div>
        </div>

        <div className='row-s-8'>
          <NewsListDisplay/>  
        </div>
                
        {/* <button onclick={()=>{previousPage}}>Previous Page</button>
        <button onclick={()=>{nextPage}}>Next Page</button><div></div> */}
        <div className='container'>
          <GraphDisplay/>  
        </div>
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