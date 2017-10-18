let faker = require('faker');

module.exports = {
  fetchSearchResult(query){
    let result = [];
    return result;
  },

  fetchGallery: function(){
    let arrList = [];
    let arr     = [];

    let photographies = generatePhotograhies();
    let galleries     = generateGalleries(photographies);
    let photos        = generatePhotos(galleries);

    localStorage.setItem('photos', JSON.stringify(photos));
    for(let photo of photos){
      for(let g of photographies){
        if(g.user_name === photo.user_name){
          arr.push(Object.assign(photo, {'photography': g}));
        }
      }
    }
    for(let gal of galleries){
      for(let p of arr){
        if(gal.created_by === p.user_name){
          arrList.push(Object.assign(gal, {'photo': p}));
          break;
        }
      }
    }
    return arrList;
  },

  fetchPhotos: function(data){
    let photos = JSON.parse(localStorage.getItem('photos'));
    if(data === null){
      return photos;
    }
    let photosByGallery = photos.filter((item) => item.gallery_id === parseInt(data.gallery_id));
    return photosByGallery;
  },

  computeSizes: function({photos, columns, width, margin}){
    if(!width){
      return [];
    }
    // divide photos over rows, max cells based on `columns`
    // effectively resulting in [[0, 1, 2], [3, 4, 5], [6, 7]]
    const rows = photos.reduce((acc, cell, idx) =>{
      const row = Math.floor(idx / columns);
      acc[row]  = acc[row] ? [...acc[row], cell] : [cell];
      return acc;
    }, []);

    // calculate total ratio of each row, and adjust each cell height and width
    // accordingly.
    const lastRowIndex  = rows.length - 1;
    const rowsWithSizes = rows.map((row, rowIndex) =>{
      const totalRatio = row.reduce((result, photo) => result + ratio(photo), 0);
      const rowWidth   = width - row.length * (margin * 2);
      const height     = (rowIndex !== lastRowIndex || row.length > 1)
          ? rowWidth / totalRatio
          : rowWidth / columns / totalRatio;
      return row.map(photo => ({
        ...photo,
        height,
        width: height * ratio(photo),
      }));
    });

    return rowsWithSizes.reduce((acc, row) => [...acc, ...row], []);
  }
};

function ratio({width, height}){
  return width / height;
}

function getRandomSize(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function getRandHeight(){
  return getRandomSize(750, 800);
}

function getRandWidth(){
  return getRandomSize(600, 1024);
}

function generateGalleries(creators){
  let galleries         = [];
  let numberOfGalleries = getRandomSize(15, 15);
  for(let i = 0; i < numberOfGalleries; i++){
    if(i % 2 === 0){
      let gal = {
        gallery_id: i + 1,
        gallery_name: faker.name.findName(),
        created_by: '',
        avatar: faker.image.avatar(),
        curated_by: faker.name.findName(),
        photo_by: '',
        bg_image: 'http://placeimg.com/' + getRandWidth() + '/' + getRandHeight() + '/any'
      }
      galleries.push(gal);
    }
    else{
      let gal = {
        gallery_id: i + 1,
        gallery_name: faker.name.findName(),
        created_by: '',
        avatar: faker.image.avatar(),
        curated_by: '',
        photo_by: faker.name.findName(),
        bg_image: 'http://placeimg.com/' + getRandWidth() + '/' + getRandHeight() + '/any'
      }
      galleries.push(gal);
    }
  }
  for(let i = 0; i < galleries.length; i++){
    let index               = getRandomSize(1, creators.length - 1);
    galleries[i].created_by = creators[index].user_name;
  }
  return galleries;
}

function generatePhotos(galleries){
  let photos = [];
  for(let i = 0; i < galleries.length; i++){
    let numberOfPhotos = getRandomSize(25, 50);
    for(let j = 0; j < numberOfPhotos; j++){
      let height = getRandHeight();
      let width  = getRandWidth();
      let photo  = {
        id: j + 1,
        name: faker.name.findName(),
        curated_by: faker.name.findName(),
        src: 'http://placeimg.com/' + width + '/' + height + '/any',
        srcSet: [
          'http://placeimg.com/' + getRandWidth() + '/' + getRandHeight() + '/any'
        ],
        width: width,
        height: height,
        user_name: galleries[i].created_by,
        gallery_id: galleries[i].gallery_id
      }
      photos.push(photo);
    }
  }
  return photos;
}

function generatePhotograhies(){
  let Photograhies = [];
  for(let i = 0; i < 10; i++){
    let first_name = faker.name.firstName();
    let last_name  = faker.name.lastName();
    let Photograhy = {
      id: i + 1,
      user_name: faker.internet.userName(),
      first_name: first_name,
      last_name: last_name,
      full_name: first_name + ' ' + last_name,
      biography: faker.lorem.paragraph(),
      avatar: faker.image.avatar(),
      group: [],
      country: '',
      website: ''
    }
    Photograhies.push(Photograhy);
  }
  return Photograhies;
}
