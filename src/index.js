import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'

//create store and pass the reducer function which will interact with the store
const store = createStore(reducer);

//subscribe to change in the state of the central store
//Only when all the fetch request are complete do we render the app
store.subscribe(() => {
    console.log("store updated")
    console.log(store.getState())
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})

//URL to all the endpoints
const urlcat = 'https://www.reddit.com/r/cats.json';	
const urlalternatives = 'https://www.reddit.com/r/alternatives.json';
const urlpics = 'https://www.reddit.com/r/pics.json';
const urlgifs = 'https://www.reddit.com/r/gifs.json';
const urladvise = 'https://www.reddit.com/r/advise.json';
const urlanimals = 'https://www.reddit.com/r/animals.json';
const urlimages = 'https://www.reddit.com/r/images.json';
const urlphotoshop = 'https://www.reddit.com/r/photoshop.json';
const urlbattles = 'https://www.reddit.com/r/battles.json';
const urlhmmm = 'https://www.reddit.com/r/hmmm.json';
const urlall = 'https://www.reddit.com/r/all.json';
const urlaww = 'https://www.reddit.com/r/aww.json';

//these functions return a promise	
	function getCats() {
	    return fetch(urlcat).then(res => res.json())
	}
	
	function getAlternatives() {
	    return fetch(urlalternatives).then(res => res.json())
	}
	
	function getPics() {
	    return fetch(urlpics).then(res => res.json())
	}
	
	function getGifs() {
	    return fetch(urlgifs).then(res => res.json())
	}
	
	function getAdvice() {
	    return fetch(urladvise).then(res => res.json())
	}
	
	function getAnimals() {
	    return fetch(urlanimals).then(res => res.json())
	}
	
	function getImages() {
	    return fetch(urlimages).then(res => res.json())
	}
	
	function getPhotoshop() {
	    return fetch(urlphotoshop).then(res => res.json())
	}
	
	
	function getBattles() {
	    return fetch(urlbattles).then(res => res.json())
	}
	
	function getHmmm() {
	    return fetch(urlhmmm).then(res => res.json())
	}
	
	function getAll() {
	    return fetch(urlall).then(res => res.json())
	}
	
	function getAww() {
	    return fetch(urlaww).then(res => res.json())
	}
	
	//main function definition to collect all the parsed responses
	function getAllRes() {
	    return Promise.all([
	        getCats(),
	        getAlternatives(),
	        getPics(),
	        getGifs(),
	        getAdvice(),
	        getAnimals(),
	        getImages(),
	        getPhotoshop(),
	        getBattles(),
	        getHmmm(),
	        getAll(),
	        getAww()
	        ])
	}
	
	let subreddits = {};
	//get responses from all endpoints and then put it into one object called subreddits
	//here we filter all the responses to get only posts with images
	getAllRes().then(([cats, alternatives, pics, gifs, advise, animals, images, photoshop, battles, hmmm, all,aww]) => {
	    //console.log(cats, alternatives, pics, gifs, advise, animals, images, photoshop, battles, hmmm, all,aww)
        subreddits = {
            cats: cats.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            alternatives: alternatives.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            pics: pics.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            gifs: gifs.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            advice: advise.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            animals: animals.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            images: images.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            photoshop: photoshop.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            battles: battles.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            hmmm: hmmm.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            all: all.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width === null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        }),
            aww: aww.data.children
	                        .filter(obj =>{
	                           if ((obj.data.thumbnail_width == null)||(obj.data.thumbnail == (""||"self"))){
	                               return false
	                           } else {
	                               return true
	                           }
	                        })
        }
        
        //dispatch an action that contains all the subreddits to be added into store
        const initAction = {
            type: "ADD",
            subreddits: subreddits
        }
        
        store.dispatch(initAction);
	})

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
