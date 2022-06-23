import React from 'react'
import Axios from 'axios'
import {Image} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
// components
import SearchCon from  '../components/search-con'
import CardsArray from  '../components/cards-array'
import Splash from  '../components/splash'
<Image source={{uri:'https://www.intersinema.com/film/resimler/37/3749_6206_enbuyuk.gif'}} style={{width:200,height:200,resizeMode:'contain'}} />

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      trendingMovies: [],
      trendingShows: [],
      latestMovies: [],
      isLoading: false,
      key : '8288c4619f539f02ea967c84597b8d8f'
    }
  }
  getTrendingMovies = () => {
      Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+this.state.key).then(res=>{
        this.setState({
          trendingMovies:res.data.results,
        })
      })
  }
  getTrendingShows = () => {
      Axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key="+this.state.key).then(res=>{
        this.setState({
          trendingShows:res.data.results
        })
      })
  }
  getLatestMovies = () => {
      Axios.get("https://api.themoviedb.org/3/movie/popular?api_key="+this.state.key+"&language=tr-US&page=1").then(res=>{
        this.setState({
          latestMovies:res.data.results
        })
      })
  }
  setLoad=()=>{
    this.setState({
      isLoading: false
    })
  }
  componentDidMount(){
    this.setState({
      isLoading: true
    })
    setTimeout(this.setLoad,3000);
    this.getTrendingMovies();
    this.getTrendingShows();
    this.getLatestMovies();
    }
  render(){
    return(
      <section data-aos="fade-up">
        {this.state.isLoading && <Splash/>}
        {!this.state.isLoading && <div style={{paddingBottom:'50px'}}>
          <Container fluid>
            <Row noGutters>
              <Col>
                <SearchCon/>
              </Col>
            </Row>
          </Container>
          <br/>
          <CardsArray list={this.state.trendingMovies} title="Trendte Olan Filmler"/>
          <br/>
          <CardsArray list={this.state.latestMovies} title="Populer Dizi Ve Filmler" type="movie"/>
          <br/>
          <CardsArray list={this.state.trendingShows} title="Populer TV Şovları"/>
        </div>}
      </section>
    )
  }
}
export default Home
