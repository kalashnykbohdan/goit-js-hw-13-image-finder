'use strict';

const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';


export default{
  page:1,
  query: '',
  fetchImgList(query){
    const options = {
      headers:{
        Authorization: '16592129-67c5d546392e0470201b3bb2a'
      }
    }
    const requestParams = `&q=${this.query}&page=${this.page}&per_page=12&key=`;
    return fetch(baseUrl + requestParams + options.headers.Authorization)
    .then(response => response.json())
    .then(parsedResponse => {
      this.incrementPage();
      return parsedResponse.hits;
    });
    
  },
  get searchQuery(){
    return this.query;
  },
  set searchQuery(string){
    this.query = string;
  },
  incrementPage(){
    this.page += 1;
  },
  resetPage(){
    this.page = 1;
  }
  
}