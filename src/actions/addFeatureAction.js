//action suite 
//action types
//action creator - a function that returns an action object
//action objects 

export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = (feature) => { //action creator 
    return { type: ADD_FEATURE, payload: feature } //action object, //feature is a whole object btw 
}
