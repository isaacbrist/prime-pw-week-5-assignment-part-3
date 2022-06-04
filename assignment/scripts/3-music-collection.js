console.log('***** Music Collection *****')
let collection = [];
//function to add an object ontaining the title of an album, artist, and year it was pubished to an array
//should then return with new object.
function addToCollection(title, artist, year) {
    collection.push({ title, artist, year })
    return { title, artist, year };
}
//end of addToCollection

//testing the addToCollection function, adding 6 objects
console.log('I just got a new album:', addToCollection('Funeral', 'Arcade Fire', 2004));
console.log('I just got a new album:', addToCollection('The Suburbs', 'Arcade Fire', 2010));
console.log('I just got a new album:', addToCollection('Brightside', 'The Lumineers', 2022));
console.log('I just got a new album:', addToCollection('Sigh No More', 'Mumford and Sons', 2009));
console.log('I just got a new album:', addToCollection('My head is an Animal', 'Of Monsters and Men', 2011));
console.log('I just got a new album:', addToCollection('Special Reserve', 'Gaelic Storm', 2003));

//testing my 'collection' array
console.log('Here is my musical collection!', collection);

//creating function to show collection
function showCollection(array) {
    console.log(array.length);
    for (let album of array);
    return array;
};

//testing showCollection function. should looop through array and log 'TITLE by ARTIST, published in YEAR'
console.log(showCollection(collection))

function findByArtist(artist) {
    {
        return collection.filter(({ artist: a }) => a == artist).map(({ title }) => title);
    }
}
    //----broken code----
    //let results = [];
    //for (let i = 0; i < collection.length; i++) {
    //    if (collection[i].artist === artist); {
    //        results.push(collection[i].title);
    //    }
    //    return results;
    //}
//
//}
//----end broken code----


//Testing findByArtist function. Should return the titles of the corresponding album. 
//'Funeral'
//'The Suburbs'
console.log('Do I have any albums by Arcade Fire in my collection?', findByArtist('Arcade Fire'))
//'My head is an animal'
console.log('Do I have any albums by Of Monsters and Men in my collection?', findByArtist('Of Monsters and Men'))
//Returns with an empty array
console.log('Do I have any albums by Simon and Garfunkel in my collection?', findByArtist('Simon and Garfunkel'))