import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar"; 
import ImageGallery from './ImageGallery/ImageGallery';
//import Loader from "./Loader/Loader";
//import Button from "./Button/Button";
//import Modal from "./Modal/Modal";
import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_';

class App extends Component{

  state = {
    id: '',
    activePage: 1,
    numberOfPages: 0,
    isLoading: false,
    error: null,
    webformatURL: '',
    largeImageURL: '',
  };
  getCharacters = async () => {
    this.setState({
      isLoading: true,
    });

    const { activePage } = this.state;
    try {
      //const { data } = await axios(`page=${activePage}`);
      console.log(activePage);
      
      this.setState({

      })
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  async componentDidMount() {
    await this.getCharacters();
  }
  render(){
    return(
      <div>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery 
        
        />
      </div>
    )
  }
}

export default App;