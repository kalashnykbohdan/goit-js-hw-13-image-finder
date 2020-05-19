'use strict';

import responseCard from '../templates/cardImg.hbs'
import serviceFetchCountries from './services/fetchRequest.js'

const refs = {
    jsInput: document.querySelector('#search-form'),
    jsListResponse: document.querySelector('#js-list'),
    loadMoreBth: document.querySelector('button[data-action="load-more"]')
};

refs.jsInput.addEventListener('submit',searchFormImg);
refs.loadMoreBth.addEventListener('click',loadMoreBtnHandler);


function searchFormImg(e){
    e.preventDefault();

    
    // console.dir(e.currentTarget);
    const inputValue = e.currentTarget.elements.query.value;
    clearList();
    serviceFetchCountries.resetPage();
    serviceFetchCountries.searchQuery = inputValue;

    serviceFetchCountries.fetchImgList().then(insertListIteams)

}
function loadMoreBtnHandler(){
    serviceFetchCountries.fetchImgList().then(insertListIteams)
}

function insertListIteams(items){
    const markup = responseCard(items) 
    refs.jsListResponse.insertAdjacentHTML('beforeend', markup);

}

function clearList(){
    refs.jsListResponse.innerHTML = '';
}
// function buildList(img, view) {
//     const markup = img.map(iteam => view(iteam)).join('');
//     refs.jsListCountry.insertAdjacentHTML('afterbegin', markup) 
    
// }