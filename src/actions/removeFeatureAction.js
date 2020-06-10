
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = (feature) => { //action creator 
    return { type: REMOVE_FEATURE, payload: feature } //action object, //feature is a whole object btw 
}
