const assets = {};
const r = require.context('../assets/page-assets/', false);
r.keys().forEach(key => assets[key.replace('./', '')] = r(key));

const ALYSSA_MATTHEW_AND_GOLDY = 'alyssa-matthew-and-goldy';
const AMMA_AND_PAPA = 'amma-and-papa';
const CHARIS = 'charis';
const CHRIS = 'chris';
const DAVID = 'david';
const DOTTY = 'dotty';
const EBBY = 'ebby';
const EMILY_AND_RAMI = 'emily-and-rami';
const GRAYSON = 'grayson';
const HEIDI = 'heidi';
const HOLLY = 'holly';
const JACOB = 'jacob';
const LISA = 'lisa';
const NICK_AND_ALEX = 'nick-and-alex';
const REID_AND_EMILY = 'reid-and-emily';
const YETI = 'yeti';
const EVERYONE_ELSE = 'everyone-else';

const ALL_PEOPLE = [ ALYSSA_MATTHEW_AND_GOLDY, AMMA_AND_PAPA, CHARIS, CHRIS, DAVID, DOTTY, EBBY, EMILY_AND_RAMI, GRAYSON, HEIDI, HOLLY, JACOB, LISA, NICK_AND_ALEX, REID_AND_EMILY, YETI, EVERYONE_ELSE ];

const assetToPeopleMap = buildAssetToPeopleMap();

const personToDataMap = initializeEmptyPersonToDataMap();
addAssets(personToDataMap, assetToPeopleMap);
addHumanReadableTitles(personToDataMap);
addQuotes(personToDataMap);

/**
 * Build object mapping images/videos to the people that appear in them
 */
function buildAssetToPeopleMap() {
  return {
    /* Images */
    '74.jpg': [REID_AND_EMILY],

    // Olden Tymes
    '46.jpg': [DAVID],
    '47.jpg': [DAVID],
    '48.jpg': [DAVID],
    '49.jpg': [DAVID],
    '37.jpg': [DAVID],
    '51.jpg': [DAVID],

    // Newer but Grayson and I still don't exist
    '11.jpg': [LISA],
    '40.jpg': [CHRIS, HEIDI, HOLLY],

    // Grayson and I are kids
    '45.jpg': [DAVID],
    '44.jpg': [LISA, JACOB],
    '41.jpg': [GRAYSON, JACOB, ALYSSA_MATTHEW_AND_GOLDY, EMILY_AND_RAMI],
    '39.jpg': [NICK_AND_ALEX, REID_AND_EMILY, GRAYSON, JACOB, EVERYONE_ELSE],
    '38.jpg': [REID_AND_EMILY, GRAYSON, JACOB],
    '42.jpg': [GRAYSON],
    '43.jpg': [GRAYSON],
    '24.jpg': [GRAYSON, JACOB],
    '73.jpg': [JACOB, LISA, GRAYSON],
    '54.jpg': [DAVID],
    '69.jpg': [JACOB, REID_AND_EMILY],
    '70.jpg': [EVERYONE_ELSE],
    '71.jpg': [DAVID],
    '72.jpg': [DAVID],
    '67.jpg': [JACOB, REID_AND_EMILY, AMMA_AND_PAPA],
    '66.jpg': [REID_AND_EMILY],
    '55.jpg': [HEIDI],
    '56.jpg': [DAVID],
    
    // Last 10ish years
    '61.jpg': [HEIDI],
    '68.jpg': [DAVID],
    '2.jpg': [GRAYSON, CHARIS],
    '5.jpg': [JACOB, GRAYSON, LISA],
    '0.jpg': [GRAYSON, JACOB, LISA, AMMA_AND_PAPA, REID_AND_EMILY, CHRIS, HEIDI],
    '7.jpg': [JACOB, GRAYSON, LISA, CHARIS, EBBY],
    '64.jpg': [HEIDI],
    '8.jpg': [GRAYSON, JACOB, HEIDI, AMMA_AND_PAPA, LISA, REID_AND_EMILY],
    '9.jpg': [GRAYSON, JACOB, HEIDI, AMMA_AND_PAPA, LISA, REID_AND_EMILY],
    '62.jpg': [HEIDI, AMMA_AND_PAPA, NICK_AND_ALEX],
    '14.jpg': [LISA, GRAYSON],
    '21.jpg': [AMMA_AND_PAPA, JACOB],
    '31.jpg': [LISA, JACOB, GRAYSON],
    '63.jpg': [REID_AND_EMILY, HEIDI, AMMA_AND_PAPA, LISA, GRAYSON, JACOB],
    '65.jpg': [HEIDI],
    '1.jpg': [GRAYSON],
    '10.jpg': [GRAYSON],
    '19.jpg': [LISA, GRAYSON, JACOB],
    '12.jpg': [DAVID],
    '15.jpg': [LISA, JACOB, GRAYSON],
    '26.jpg': [LISA, GRAYSON],
    '17.jpg': [JACOB],
    '18.jpg': [GRAYSON, JACOB],
    '22.jpg': [DAVID],
    '50.jpg': [LISA, AMMA_AND_PAPA],

    // Last 2-3ish years
    '59.jpg': [AMMA_AND_PAPA],
    '60.jpg': [HEIDI, LISA],
    '32.jpg': [LISA],
    '29.jpg': [JACOB, GRAYSON, LISA],
    '30.jpg': [JACOB, GRAYSON],
    '20.jpg': [DAVID],
    '16.jpg': [DAVID],
    '33.jpg': [GRAYSON, EBBY],
    '52.jpg': [DAVID],
    '53.jpg': [LISA],
    '27.jpg': [JACOB, GRAYSON],
    '23.jpg': [LISA],
    '57.jpg': [CHRIS],
    '13.jpg': [LISA],
    '6.jpg': [JACOB, GRAYSON, LISA],
    '28.jpg': [DAVID],
    '25.jpg': [GRAYSON],
    '34.jpg': [GRAYSON],
    '35.jpg': [GRAYSON],
    '58.jpg': [HEIDI, EVERYONE_ELSE],

    /* Videos */
    '0.mov': [EBBY],
    '1.mov': [NICK_AND_ALEX],
    '2.mov': [ALYSSA_MATTHEW_AND_GOLDY],
    '3.mov': [ALYSSA_MATTHEW_AND_GOLDY],
    '4.mov': [ALYSSA_MATTHEW_AND_GOLDY]
  }
}

/**
 * Return an object with keys for each person defined in ALL_PEOPLE array.
 */
function initializeEmptyPersonToDataMap() {
  const personToDataMap = {};
  ALL_PEOPLE.forEach(person => personToDataMap[person] = {});
  return personToDataMap;
}

/**
 * Given an object with keys corresponding to each unique person identifier in site, update it such that any images the person appears in is added to array keyed by 'images' in the corresponding person object, and each video the person appears in is added to array keyed by 'videos' in the corresponding person object.
 * @param {Object} personToDataMap An object containing keys for all person identifiers in the project. Each key's value is another object, and after running this method all images and videos a person appears in will be set in their object under corresponding keys.
 * @param {Object} assetToPeopleMap Map of assets (images / videos) to people that appear in the asset.
 */
function addAssets(personToDataMap, assetToPeopleMap) {
  Object.keys(assetToPeopleMap).forEach(assetKey => {
    const assetFiletype = assetKey.split('.').pop();
    const assetType = assetFiletype === 'jpg' ? 'images' : 'videos';
    const people = assetToPeopleMap[assetKey];
    people.forEach(person => {
      const personConfig = personToDataMap[person];
      if(!personConfig[assetType]) personConfig[assetType] = [assets[assetKey]];
      else personConfig[assetType].push(assets[assetKey]);
    });
  });
}

/**
 * Define human-readable titles for each person in the map.
 * @param {Object} personToDataMap 
 */
function addHumanReadableTitles(personToDataMap) {
  personToDataMap[ALYSSA_MATTHEW_AND_GOLDY].title = 'Alyssa, Matthew, and Goldy';
  personToDataMap[AMMA_AND_PAPA].title = 'Amma and Papa (like, your parents)';
  personToDataMap[CHARIS].title = 'Charis';
  personToDataMap[CHRIS].title = 'Chris';
  personToDataMap[DAVID].title = 'It\'s You!';
  personToDataMap[DOTTY].title = 'Dotty';
  personToDataMap[EBBY].title = 'ebby';
  personToDataMap[EMILY_AND_RAMI].title = 'Emily and Rami';
  personToDataMap[GRAYSON].title = 'Grayson and Aaron';
  personToDataMap[HEIDI].title = 'Heidi';
  personToDataMap[HOLLY].title = 'Holly';
  personToDataMap[JACOB].title = 'Jacob and Brent';
  personToDataMap[LISA].title = 'Lisa';
  personToDataMap[NICK_AND_ALEX].title = 'Nick and Alex';
  personToDataMap[REID_AND_EMILY].title = 'Reid and Emily';
  personToDataMap[YETI].title = 'The Abominable Snowman';;
  personToDataMap[EVERYONE_ELSE].title = 'Everyone Else!!!';
}

/**
 * Add quotes to person object if applicable.
 * @param {Object} personToDataMap The person to data map.
 */
function addQuotes(personToDataMap) {
  personToDataMap[CHARIS].quotes = ['Superior Dave, my favorite Rave. Have a simply wonderful Birthday! Keep smiling brother. Enjoy whatever family can join in the celebration. Next year will be a real celebration..just dont get the purple mouth your merlot likes to leave with you!! Love you!'];
  personToDataMap[DOTTY].quotes = ['Davidada! I love you so much. You are my only brother and I couldn’t have gotten another as good as you. ❤️🥰'];
  personToDataMap[HEIDI].quotes = ['Happy Birthday, David. I love you so!😍😘David Doodle Bug ❤️'];
  personToDataMap[HOLLY].quotes = ['Happy Birthday to my first baby! You have always been an absolute joy! You bring so much love and laughter into this world! I am so proud of the man that you are! Thank you for being such a great role model for my son! I love you so much and miss you! Have the happiest of Birthdays my Bug!'];
  personToDataMap[LISA].quotes = ['I hope you know that you are the love of my life. You make me so happy. I love your sense of humor, your brilliance, your confidence, your generosity, your supportiveness, your patience, your ingenuity, your strength, your optimism, your boyscout-like preparedness, your charm and your good looks. I want to thank you for allowing mom to come stay with us. I am so grateful that she is here and safe. I hope your birthday is a happy one despite the fact that we are stuck in house quarantine. I am the luckiest person in the world to have found my soul mate at such a young age. I love you so very much.'];
  personToDataMap[NICK_AND_ALEX].quotes = ['I say uncle! Happy birthday ole chap!'];
  personToDataMap[EVERYONE_ELSE].quotes = ['Happy birthday David!!! Sending you lots of love and happy wishes today. -Tess', 'Happy birthday David!! We are so happy to have you all as neighbors and hope to have a celebratory drink with you very soon. xo, Jane and JP', 'hey, it’s not old, just wiser - Happy birthday 生日快樂. 萬事如意 - YT'];
}

export default personToDataMap;