module.exports = {
  fetchSearchResult(query){
    let result = [];
    return result;
  },

  fetchGallery: function(){
    let arrList      = [];
    let arr = [];
    for(let photo of photos){
      for(let g of photography){
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
  fetchPhotos: function(type){
    let arrList      = [];
    let photosByType = {};
    if(type.toLowerCase() === 'all'){
      photosByType = photos;
    }
    else{
      photosByType = photos.filter((item) => item.type.toLowerCase() === type.toLowerCase());
    }
    for(let photo of photosByType){
      for(let g of photography){
        if(g.user_name === photo.user_name){
          arrList.push(Object.assign(photo, {'photography': g}));
        }
      }
    }
    return arrList;
  }
};

let galleries = [
  {
    gallery_id: 1,
    gallery_name: 'Look me in the mirror',
    gallery_name1: 'look-me-in-the-mirror',
    created_by: 'user1',
    avatar: '../app/avatars/1.jpg',
    curated_by: 'Takashi Yasui',
    photo_by: '',
    bg_image: '../app/gallery/1.jpg'
  },
  {
    gallery_id: 2,
    gallery_name: 'On The Table',
    gallery_name1: 'on-the-table',
    created_by: 'user1',
    avatar: '../app/avatars/1.jpg',
    curated_by: 'Contr4st',
    photo_by: '',
    bg_image: '../app/gallery/12.jpg'
  },
  {
    gallery_id: 3,
    gallery_name: 'Winter Camping',
    gallery_name1: 'winter-camping',
    created_by: 'user1',
    avatar: '../app/avatars/1.jpg',
    curated_by: 'Contr4st',
    photo_by: '',
    bg_image: '../app/gallery/2.jpg'
  },
  {
    gallery_id: 4,
    gallery_name: 'Surreal Glitches',
    gallery_name1: 'surreal-glitches',
    created_by: 'user4',
    avatar: '../app/avatars/4.jpg',
    curated_by: '500px',
    photo_by: '',
    bg_image: '../app/gallery/3.jpg'
  },
  {
    gallery_id: 5,
    gallery_name: 'Symmetry',
    gallery_name1: 'symmetry',
    created_by: 'user5',
    curated_by: 'Contr4st',
    photo_by: '',
    avatar: '../app/avatars/4.jpg',
    bg_image: '../app/gallery/23.jpg'
  },
  {
    gallery_id: 6,
    gallery_name: 'Dark Desert',
    gallery_name1: 'dark-desert',
    created_by: 'user6',
    avatar: '../app/avatars/4.jpg',
    curated_by: '500px',
    photo_by: '',
    bg_image: '../app/gallery/4.jpg'
  },
  {
    gallery_id: 7,
    gallery_name: 'Portraits',
    gallery_name1: 'portraits',
    created_by: 'user1',
    avatar: '../app/avatars/2.jpg',
    curated_by: 's1000',
    photo_by: '',
    bg_image: '../app/gallery/5.jpg'
  },
  {
    gallery_id: 8,
    gallery_name: 'The Great USA',
    gallery_name1: 'the-great-usa',
    created_by: 'user1',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Contr4st',
    photo_by: '',
    bg_image: '../app/gallery/6.jpg'
  },
  {
    gallery_id: 9,
    gallery_name: 'Winter Camping',
    gallery_name1: 'winter-camping',
    created_by: 'user1',
    avatar: '../app/avatars/3.jpg',
    curated_by: 'Kelly DeLay',
    photo_by: '',
    bg_image: '../app/gallery/7.jpg'
  },
  {
    gallery_id: 10,
    gallery_name: 'Japan',
    gallery_name1: 'japan',
    created_by: 'user4',
    avatar: '../app/avatars/3.jpg',
    curated_by: '',
    photo_by: 'MIYAMOTO Y',
    bg_image: '../app/gallery/8.jpg'
  },
  {
    gallery_id: 11,
    gallery_name: 'Film Favourites',
    gallery_name1: 'film-favourites',
    created_by: 'user5',
    avatar: '../app/avatars/3.jpg',
    curated_by: 'Takashi Yasui',
    photo_by: '',
    bg_image: '../app/gallery/9.jpg'
  },
  {
    gallery_id: 12,
    gallery_name: 'Taiwan',
    gallery_name1: 'taiwan',
    created_by: 'user5',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Arnaud Moro',
    photo_by: '',
    bg_image: '../app/gallery/10.jpg'
  },
  {
    gallery_id: 13,
    gallery_name: 'Wonderful Winter',
    gallery_name1: 'wonderful-winter',
    created_by: 'user1',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Arnaud Moro',
    photo_by: '',
    bg_image: '../app/gallery/11.jpg'
  },
  {
    gallery_id: 14,
    gallery_name: 'Threes',
    gallery_name1: 'threes',
    created_by: 'user1',
    avatar: '../app/avatars/4.jpg',
    curated_by: '',
    photo_by: 'Yeow Chin Liang (Yeow8)',
    bg_image: '../app/gallery/12.jpg'
  },
  {
    gallery_id: 15,
    gallery_name: 'Dunes',
    gallery_name1: 'dunes',
    created_by: 'user1',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Takashi Yasui',
    photo_by: '',
    bg_image: '../app/gallery/13.jpg'
  },
  {
    gallery_id: 16,
    gallery_name: 'Think Green',
    gallery_name1: 'think-green',
    created_by: 'user4',
    curated_by: '',
    photo_by: 'Laureen Burton',
    avatar: '../app/avatars/1.jpg',
    bg_image: '../app/gallery/14.jpg'
  },
  {
    gallery_id: 17,
    gallery_name: 'Orange Crush',
    gallery_name1: 'orange-crush',
    created_by: 'user5',
    curated_by: '',
    photo_by: 'Laureen Burton',
    avatar: '../app/avatars/3.jpg',
    bg_image: '../app/gallery/15.jpg'
  },
  {
    gallery_id: 18,
    gallery_name: 'Yellow',
    gallery_name1: 'Yellow',
    created_by: 'user6',
    avatar: '../app/avatars/4.jpg',
    curated_by: '',
    photo_by: 'Laureen Burton',
    bg_image: '../app/gallery/16.jpg'
  },
  {
    gallery_id: 19,
    gallery_name: 'Wedding and Landscapes',
    gallery_name1: 'wedding-and-landscapes',
    created_by: 'user1',
    avatar: '../app/avatars/2.jpg',
    curated_by: '',
    photo_by: 'Arnaud Moro',
    bg_image: '../app/gallery/17.jpg'
  },
  {
    gallery_id: 20,
    gallery_name: 'Fresh Faces',
    gallery_name1: 'fresh-faces',
    created_by: 'user1',
    photo_by: 'Laureen Burton',
    avatar: '../app/avatars/1.jpg',
    curated_by: '',
    bg_image: '../app/gallery/18.jpg'
  },
  {
    gallery_id: 21,
    gallery_name: 'Romantic Moment',
    gallery_name1: 'Romantic Moment',
    created_by: 'user1',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Takashi Yasui',
    photo_by: '',
    bg_image: '../app/gallery/20.jpg'
  },
  {
    gallery_id: 22,
    gallery_name: 'No Places Like Home',
    gallery_name1: 'no-places-like-home',
    created_by: 'user4',
    avatar: '../app/avatars/2.jpg',
    curated_by: '',
    photo_by: 'Laureen Burton',
    bg_image: '../app/gallery/19.jpg'
  },
  {
    gallery_id: 23,
    gallery_name: 'Lifestyle',
    gallery_name1: 'Lifestyle',
    created_by: 'user5',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Stephanie Juliet Algieri',
    photo_by: '',
    bg_image: '../app/gallery/27.jpg'
  },
  {
    gallery_id: 24,
    gallery_name: 'Marco',
    gallery_name1: 'marco',
    created_by: 'user5',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Stephanie Juliet Algieri',
    photo_by: '',
    bg_image: '../app/gallery/31.jpg'
  },
  {
    gallery_id: 25,
    gallery_name: 'Lifestyle',
    gallery_name1: 'Lifestyle',
    created_by: 'user5',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Stephanie Juliet Algieri',
    photo_by: '',
    bg_image: '../app/gallery/30.jpg'
  },
  {
    gallery_id: 26,
    gallery_name: 'Marco',
    gallery_name1: 'marco',
    created_by: 'user5',
    avatar: '../app/avatars/2.jpg',
    curated_by: 'Stephanie Juliet Algieri',
    photo_by: '',
    bg_image: '../app/gallery/32.jpg'
  }
];

let photos      = [
  {
    id: 1,
    name: 'Look me in the mirror',
    curated_by: 'Stephanie Juliet Algieri',
    curated_from_user_name: 'user3',
    is_curated: true,
    src: '../app/gallery/1.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 2,
    name: 'On The Table',
    curated_by: 'Stephanie Juliet Algieri',
    curated_from_user_name: 'user3',
    src: '../app/gallery/2.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 3,
    name: 'Winter Camping',
    curated_by: 'Takashi Yasui',
    photo_by: '',
    src: '../app/gallery/3.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 4,
    name: 'Kyoto',
    curated_by: 'Takashi Yasui',
    photo_by: '',
    src: '../app/gallery/4.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 5,
    name: 'Places',
    curated_by: '',
    photo_by: 'Morgan Phillips',
    src: '../app/gallery/5.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 6,
    name: 'Every Second Count',
    curated_by: '',
    photo_by: 'Janet Weldon',
    src: '../app/gallery/6.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 7,
    name: 'Marco',
    curated_by: '',
    photo_by: 'Ryan Stovall',
    src: '../app/gallery/1.jpg',
    user_name: 'user1',
    gallery_id: 1
  },
  {
    id: 8,
    name: 'Animals',
    curated_by: '',
    photo_by: 'Anuska Voncina',
    src: '../app/gallery/2.jpg',
    user_name: 'user2',
    gallery_id: 1
  },
  {
    id: 9,
    name: 'World Bellow',
    curated_by: '',
    photo_by: 's1000',
    src: '../app/gallery/3.jpg',
    user_name: 'user2',
    gallery_id: 1
  },
  {
    id: 10,
    name: 'Fresh Faces',
    curated_by: '500px',
    photo_by: '',
    src: '../app/gallery/4.jpg',
    user_name: 'user2',
    gallery_id: 1
  },
  {
    id: 11,
    name: 'Epic Cityscape',
    curated_by: '500px',
    photo_by: '',
    src: '../app/gallery/5.jpg',
    user_name: 'user2',
    gallery_id: 1
  },
  {
    id: 12,
    name: 'Urban Exploration',
    curated_by: '',
    photo_by: 'Contr4st',
    src: '../app/gallery/6.jpg',
    user_name: 'user2',
    gallery_id: 1
  },
  {
    id: 13,
    name: 'Supercells',
    curated_by: 'Kelly DeLay',
    photo_by: '',
    src: '../app/gallery/13.jpg',
    user_name: 'user3',
    gallery_id: 1
  },
  {
    id: 14,
    name: 'Spring in Japan',
    curated_by: '',
    photo_by: 'MIYAMOTO Y',
    src: '../app/gallery/14.jpg',
    user_name: 'user3',
    gallery_id: 1
  },
  {
    id: 15,
    name: 'Around The World',
    curated_by: 'Arnaud Moro',
    photo_by: '',
    src: '../app/gallery/15.jpg',
    user_name: 'user3',
    gallery_id: 1
  },
  {
    id: 16,
    name: 'zen',
    curated_by: 'Arnaud Moro',
    photo_by: '',
    src: '../app/gallery/16.jpg',
    user_name: 'user3',
    gallery_id: 1
  },
  {
    id: 17,
    name: '"My Workplace"',
    curated_by: '',
    photo_by: 'Yeow Chin Liang (Yeow8)',
    src: '../app/gallery/17.jpg',
    user_name: 'user3',
    gallery_id: 1
  },
  {
    id: 18,
    name: 'JULIETTE',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/18.jpg',
    user_name: 'user3',
    gallery_id: 2
  },
  {
    id: 19,
    name: 'Conceptual',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/19.jpg',
    user_name: 'user4',
    gallery_id: 2
  },
  {
    id: 20,
    name: 'Portraits That Will Inspire You',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/20.jpg',
    user_name: 'user4',
    gallery_id: 2
  },
  {
    id: 21,
    name: 'Slow Living',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/21.jpg',
    user_name: 'user4',
    gallery_id: 2
  },
  {
    id: 22,
    name: 'Gradient',
    by: '500px',
    type: 'new',
    src: '../app/gallery/1.jpg',
    user_name: 'user4',
    gallery_id: 2
  },
  {
    id: 23,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/2.jpg',
    user_name: 'user4',
    gallery_id: 2
  },
  {
    id: 24,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/3.jpg',
    user_name: 'user5',
    gallery_id: 2
  },
  {
    id: 25,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/4.jpg',
    user_name: 'user5',
    gallery_id: 2
  },
  {
    id: 26,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/5.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 27,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/6.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 28,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/1.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 29,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/1.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 30,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/1.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 31,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/1.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 32,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/1.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
  {
    id: 33,
    name: 'Gradient',
    curated_by: '',
    photo_by: 'Laureen Burton',
    src: '../app/gallery/1.jpg',
    user_name: 'user5',
    gallery_id: 3
  },
];

let photography = [
  {
    id: 1,
    user_name: 'user1',
    first_name: 'Stephanie',
    last_name: 'Algieri',
    full_name: 'Stephanie Juliet Algieri',
    biography: '',
    avatar: '../app/avatars/default.jpg',
    group: [],
    country: '',
    website: ''
  },
  {
    id: 2,
    user_name: 'user2',
    first_name: '',
    last_name: '',
    full_name: '',
    biography: '',
    avatar: '../app/avatars/2.jpg',
    group: [],
    country: '',
    website: ''
  },
  {
    id: 3,
    user_name: 'user3',
    first_name: '',
    last_name: '',
    full_name: '',
    biography: '',
    avatar: '../app/avatars/3.jpg',
    group: [],
    country: '',
    website: ''
  },
  {
    id: 4,
    user_name: 'user4',
    first_name: '',
    last_name: '',
    full_name: '',
    biography: '',
    avatar: '../app/avatars/4.jpg',
    group: [],
    country: '',
    website: ''
  },
  {
    id: 5,
    user_name: 'user5',
    first_name: '',
    last_name: '',
    full_name: '',
    biography: '',
    avatar: '../app/avatars/4.jpg',
    group: [],
    country: '',
    website: ''
  }
];