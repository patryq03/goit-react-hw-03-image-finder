import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
//import Loader from "./Loader/Loader";
//import Button from "./Button/Button";
//import Modal from "./Modal/Modal";
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '41316122-8be1516af8b9dd89b7470b6b1';
const perPage = 12;

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    activePage: 1,
    searchQuery: '',
    totalImages: 0,
    modalIsOpen: false,
    largeImageUrl: '',
  };

  searchImages = query => {
    if (query.trim() === '') {
      Notiflix.Notify.info('Sorry, please provide a search word');
      return;
    }
    this.setState({
      images: [],
      activePage: 1,
      searchQuery: `${Date.now()}/${query}`,
    });
  };

  sloadMoreImages = (prev) =>{
    this.setState({activePage: prev.activePage + 1});
  };
  
  componentDidUpdate = (prevProps, prevState) => {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.activePage;
    const nexPage = this.state.activePage;

    if (prevQuery !== nextQuery || prevPage !== nexPage) {
      this.getImages();
    }
  };

  getCharacters = async () => {
    this.setState({
      isLoading: true,
    });

    const { activePage } = this.state;
    try {
      const { data } = await axios(`?page=${activePage}`);
      console.log(data);

      //this.setState({});
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
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
