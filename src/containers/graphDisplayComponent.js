import React,{Component} from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export class GraphDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            graphData: this.props.graphData,
            authenticates:true
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.graphData !== prevProps.graphData) {
          this.setState({
            graphData:this.props.graphData
          })
        }
      }
    componentDidMount(){
        if(typeof window!='undefined'){
            window.addEventListener("updateVotes",(e) => {
                var newData=[];
                let voteData = JSON.parse(localStorage.getItem('voteCount')) || [];
                newData = this.state.graphData.map((news)=> {     
                    if(voteData.hasOwnProperty(news.objectID)) {
                        let newNews = Object.assign({},news);
                        newNews.points = voteData[news.objectID];
                        return newNews
                    } else {
                        return  news  
                    }
                });
                this.setState({graphData:newData})
             });
            window.addEventListener("hide",(e) => {
                var displayData=[];
                let hideData =JSON.parse(localStorage.getItem('hideData')) || [];
                displayData = this.state.graphData.filter((news)=>{return !hideData[news.objectID]})        
                this.setState({graphData:displayData});
            });            
        }
    } 
    
    render() {
        let votes=this.state.graphData.map((item)=> { return (item[`points`]); });
        votes.unshift('ID');
        let ids=this.state.graphData.map((item)=> { return (item[`objectID`]); });
        ids.unshift('x');
        const data = {
            x:'x',
            columns: [
                votes,
                ids
            ],
           
              
            };
        const axis = {
                x: {
                    tick: {
                        rotate: 60,
                        multiline: true
                    },
                    label: {
                        text:`ID`,
                        position: 'outer-center',
                        fontSize: `x-large`
                    }
                },
                y: {
                    label: {
                        text:`Votes`,
                        position: 'outer-middle',
                        fontSize: `x-large`
                    }

                }
            }
        const  grid = {
            y: {
                show: true
            }
        }    
        return (
            <div className="data">
                <C3Chart data={data} grid={grid} axis={axis}/>
            </div>
        )
    }
}
export default GraphDisplay;