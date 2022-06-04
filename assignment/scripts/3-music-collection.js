console.log('***** Music Collection *****')
let collection=[];
//function to add an object ontaining the title of an album, artist, and year it was pubished to an array
//should then return with new object.
function addToCollection(title, artist, year){
collection.push({title, artist, year})
return {title, artist, year};
}
//end of addToCollection

//testing the addToCollection function