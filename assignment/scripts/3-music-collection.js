console.log('***** Music Collection *****')
let collection=[];
//function to add an object ontaining the title of an album, artist, and year it was pubished to an array
//should then return with new object.
function addToCollection(title, artist, year){
collection.push({title, artist, year})
return {title, artist, year};
}
//end of addToCollection

//testing the addToCollection function, adding 6 objects
console.log('I just got a new album:', addToCollection('Funeral', 'Arcade Fire', 2004));
console.log('I just got a new album:', addToCollection('The Suburbs', 'Arcade Fire', 2010));
console.log('I just got a new album:', addToCollection('Brightside', 'The Lumineers', 2022));
console.log('I just got a new album:', addToCollection('Sigh No More', 'Mumford and Sons', 2009));
console.log('I just got a new album:', addToCollection('My head is and Animal', 'Of Monsters and Men', 2011));
console.log('I just got a new album:', addToCollection('Special Reserve', 'Gaelic Storm', 2003));