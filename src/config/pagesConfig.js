const assets = {};
const r = require.context('../assets/page-assets/', false);
r.keys().forEach(key => assets[key.replace('./', '')] = r(key));

const AARON = 'aaron';
const ALYSSA_MATTHEW_AND_GOLDY = 'alyssa-matthew-and-goldy';
const AMMA_AND_PAPA = 'amma-and-papa';
const BRENT = 'brent';
const CHARIS = 'charis';
const CHRIS = 'chris';
const DAVID = 'david';
const DOTTY = 'dotty';
const EBBY = 'ebby';
const EMILY_AND_RAMI = 'emily-and-rami';
const GRAYSON = 'grayson';
const HEIDI = 'heidi';
const HOLLY = 'holly';
const HOUSE = 'house';
const JACOB = 'jacob';
const KINKS = 'kinks';
const LISA = 'lisa';
const MUSWELL = 'muswell';
const NICK_AND_ALEX = 'nick-and-alex';
const REID_AND_EMILY = 'reid-and-emily';
const YETI = 'yeti';
const EVERYONE_ELSE = 'everyone-else';

const ALL_PEOPLE = [ AARON, ALYSSA_MATTHEW_AND_GOLDY, AMMA_AND_PAPA, BRENT, CHARIS, CHRIS, DAVID, DOTTY, EBBY, EMILY_AND_RAMI, GRAYSON, HEIDI, HOLLY, HOUSE, JACOB, KINKS, LISA, MUSWELL, NICK_AND_ALEX, REID_AND_EMILY, YETI, EVERYONE_ELSE ];

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
    '129.jpg': [JACOB],

    // Olden Tymes
    '240.jpg': [AMMA_AND_PAPA],
    '46.jpg': [CHRIS, HOLLY],
    '242.jpg': [HOLLY, CHRIS, HEIDI],
    '47.jpg': [DAVID],
    '48.jpg': [DAVID],
    '49.jpg': [DAVID],
    '37.jpg': [DAVID],
    '51.jpg': [DAVID],
    '221.jpg': [HOLLY, CHRIS],

    // Newer but Grayson and I still don't exist
    '147.jpg': [LISA],
    '11.jpg': [LISA],
    '117.jpg': [DAVID],
    '118.jpg': [DAVID],
    '185.jpg': [LISA],
    '40.jpg': [CHRIS, HEIDI, HOLLY],

    // Grayson and I are kids
    '45.jpg': [DAVID],
    '172.jpg': [EBBY],
    '106.jpg': [GRAYSON, JACOB],
    '203.jpg': [GRAYSON, LISA, JACOB],
    '44.jpg': [LISA, JACOB],
    '114.jpg': [GRAYSON],
    '204.jpg': [GRAYSON],
    '96.jpg': [LISA],
    '41.jpg': [GRAYSON, JACOB, ALYSSA_MATTHEW_AND_GOLDY, EMILY_AND_RAMI],
    '89.jpg': [ALYSSA_MATTHEW_AND_GOLDY, EMILY_AND_RAMI, JACOB, GRAYSON],
    '244.jpg': [JACOB, ALYSSA_MATTHEW_AND_GOLDY, EMILY_AND_RAMI, EBBY],
    '245.jpg': [ALYSSA_MATTHEW_AND_GOLDY, EMILY_AND_RAMI],
    '39.jpg': [NICK_AND_ALEX, REID_AND_EMILY, GRAYSON, JACOB],
    '38.jpg': [REID_AND_EMILY, GRAYSON, JACOB],
    '196.jpg': [GRAYSON, JACOB],
    '164.jpg': [GRAYSON, JACOB, LISA],
    '42.jpg': [GRAYSON],
    '43.jpg': [GRAYSON],
    '91.jpg': [GRAYSON],
    '178.jpg': [GRAYSON],
    '98.jpg': [GRAYSON],
    '202.jpg': [GRAYSON],
    '194.jpg': [GRAYSON],
    '191.jpg': [JACOB],
    '190.jpg': [GRAYSON, JACOB],
    '88.jpg': [GRAYSON, JACOB],
    '186.jpg': [GRAYSON, JACOB],
    '176.jpg': [GRAYSON, JACOB],
    '173.jpg': [GRAYSON, JACOB],
    '188.jpg': [GRAYSON, JACOB],
    '189.jpg': [GRAYSON, JACOB],
    '177.jpg': [GRAYSON, JACOB, LISA],
    '179.jpg': [GRAYSON, JACOB, LISA],
    '180.jpg': [GRAYSON, JACOB, LISA],
    '174.jpg': [LISA],
    '126.jpg': [GRAYSON, JACOB],
    '115.jpg': [GRAYSON, JACOB, LISA],
    '105.jpg': [GRAYSON, JACOB],
    '182.jpg': [AMMA_AND_PAPA],
    '111.jpg': [DOTTY],
    '100.jpg': [DOTTY],
    '92.jpg': [GRAYSON, JACOB],
    '113.jpg': [GRAYSON, JACOB],
    '116.jpg': [GRAYSON, JACOB],
    '112.jpg': [GRAYSON],
    '197.jpg': [GRAYSON],
    '99.jpg': [JACOB],
    '24.jpg': [GRAYSON, JACOB],
    '165.jpg': [GRAYSON, JACOB],
    '166.jpg': [GRAYSON, JACOB],
    '97.jpg': [JACOB, GRAYSON],
    '160.jpg': [JACOB],
    '95.jpg': [NICK_AND_ALEX],
    '93.jpg': [LISA, GRAYSON, JACOB],
    '110.jpg': [LISA, GRAYSON, JACOB],
    '131.jpg': [LISA, GRAYSON],
    '104.jpg': [LISA, GRAYSON, JACOB],
    '102.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '94.jpg': [LISA, GRAYSON, JACOB, NICK_AND_ALEX, REID_AND_EMILY],
    '101.jpg': [GRAYSON, JACOB, LISA],
    '103.jpg': [NICK_AND_ALEX],
    '73.jpg': [JACOB, LISA, GRAYSON],
    '54.jpg': [DAVID],
    '183.jpg': [CHARIS],
    '69.jpg': [JACOB, REID_AND_EMILY],
    '70.jpg': [HEIDI],
    '230.jpg': [REID_AND_EMILY],
    '181.jpg': [REID_AND_EMILY, NICK_AND_ALEX, CHRIS],
    '71.jpg': [DAVID],
    '72.jpg': [DAVID],
    '237.jpg': [NICK_AND_ALEX, HOLLY],
    '238.jpg': [NICK_AND_ALEX, HOLLY],
    '148.jpg': [AMMA_AND_PAPA, REID_AND_EMILY, NICK_AND_ALEX],
    '67.jpg': [JACOB, REID_AND_EMILY, AMMA_AND_PAPA],
    '228.jpg': [AMMA_AND_PAPA, REID_AND_EMILY, NICK_AND_ALEX],
    '229.jpg': [JACOB, REID_AND_EMILY, NICK_AND_ALEX],
    '66.jpg': [REID_AND_EMILY],
    '55.jpg': [HEIDI],
    '56.jpg': [DAVID],
    '123.jpg': [AMMA_AND_PAPA],
    '175.jpg': [GRAYSON],
    '201.jpg': [EMILY_AND_RAMI, ALYSSA_MATTHEW_AND_GOLDY, EBBY, DOTTY, CHARIS, LISA, GRAYSON],
    '199.jpg': [EMILY_AND_RAMI, ALYSSA_MATTHEW_AND_GOLDY],
    '200.jpg': [EBBY],
    
    // Last 10ish years
    '159.jpg': [AARON],
    '61.jpg': [HEIDI],
    '68.jpg': [DAVID],
    '2.jpg': [CHARIS],
    '5.jpg': [JACOB, GRAYSON, LISA],
    '0.jpg': [AMMA_AND_PAPA, REID_AND_EMILY, CHRIS, HEIDI],
    '7.jpg': [CHARIS, EBBY],
    '64.jpg': [HEIDI],
    '8.jpg': [HEIDI, AMMA_AND_PAPA, REID_AND_EMILY],
    '9.jpg': [HEIDI, AMMA_AND_PAPA, REID_AND_EMILY],
    '62.jpg': [HEIDI, AMMA_AND_PAPA, NICK_AND_ALEX],
    '14.jpg': [LISA, GRAYSON],
    '87.jpg': [GRAYSON, LISA],
    '21.jpg': [AMMA_AND_PAPA, JACOB],
    '85.jpg': [REID_AND_EMILY, AMMA_AND_PAPA, JACOB],
    '86.jpg': [EBBY, DOTTY, JACOB, GRAYSON, LISA],
    '107.jpg': [EBBY, DOTTY, GRAYSON, LISA],
    '31.jpg': [LISA, JACOB, GRAYSON],
    '63.jpg': [REID_AND_EMILY, HEIDI, AMMA_AND_PAPA],
    '120.jpg': [REID_AND_EMILY, HEIDI, AMMA_AND_PAPA],
    '65.jpg': [HEIDI],
    '10.jpg': [GRAYSON],
    '90.jpg': [EMILY_AND_RAMI],
    '19.jpg': [LISA, GRAYSON, JACOB],
    '12.jpg': [DAVID],
    '52.jpg': [DAVID],
    '53.jpg': [DAVID],
    '193.jpg': [DAVID],
    '15.jpg': [LISA, JACOB, GRAYSON],
    '26.jpg': [LISA, GRAYSON],
    '17.jpg': [JACOB],
    '18.jpg': [GRAYSON, JACOB],
    '22.jpg': [DAVID],
    '124.jpg': [GRAYSON, LISA],
    '153.jpg': [GRAYSON],
    '149.jpg': [GRAYSON, LISA, JACOB],
    '132.jpg': [AARON],
    '137.jpg': [AARON],
    '139.jpg': [LISA],
    '187.jpg': [AMMA_AND_PAPA],
    '184.jpg': [EMILY_AND_RAMI, ALYSSA_MATTHEW_AND_GOLDY, CHARIS, DOTTY],
    '241.jpg': [REID_AND_EMILY],
    '239.jpg': [REID_AND_EMILY, GRAYSON, JACOB],

    // Last 2-3ish years
    '198.jpg': [GRAYSON, LISA],
    '135.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '121.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '195.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '146.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '154.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '169.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '170.jpg': [ALYSSA_MATTHEW_AND_GOLDY],
    '140.jpg': [GRAYSON, JACOB],
    '152.jpg': [GRAYSON, JACOB],
    '141.jpg': [DAVID],
    '142.jpg': [GRAYSON, JACOB],
    '143.jpg': [LISA, JACOB],
    '144.jpg': [LISA, JACOB, GRAYSON],
    '145.jpg': [DAVID],
    '125.jpg': [DOTTY, EBBY],
    '59.jpg': [AMMA_AND_PAPA],
    '60.jpg': [HEIDI, LISA],
    '32.jpg': [LISA],
    '29.jpg': [JACOB, GRAYSON, LISA],
    '156.jpg': [JACOB, GRAYSON, LISA],
    '30.jpg': [JACOB, GRAYSON],
    '138.jpg': [EMILY_AND_RAMI],
    '151.jpg': [EMILY_AND_RAMI],
    '158.jpg': [EMILY_AND_RAMI],
    '127.jpg': [MUSWELL],
    '128.jpg': [MUSWELL],
    '219.jpg': [MUSWELL],
    '220.jpg': [MUSWELL],
    '119.jpg': [MUSWELL], 
    '133.jpg': [MUSWELL], 
    '20.jpg': [MUSWELL],
    '122.jpg': [MUSWELL],
    '167.jpg': [NICK_AND_ALEX],
    '161.jpg': [NICK_AND_ALEX],
    '162.jpg': [NICK_AND_ALEX],
    '16.jpg': [DAVID],
    '109.jpg': [DAVID],
    '33.jpg': [GRAYSON, EBBY],
    '27.jpg': [JACOB, GRAYSON],
    '23.jpg': [LISA],
    '57.jpg': [CHRIS],
    '13.jpg': [LISA],
    '243.jpg': [JACOB],
    '6.jpg': [JACOB, GRAYSON, LISA],
    '28.jpg': [DAVID],
    '1.jpg': [HOUSE],
    '25.jpg': [HOUSE],
    '168.jpg': [AARON],
    '157.jpg': [AARON],
    '136.jpg': [AARON],
    '134.jpg': [AARON],
    '155.jpg': [AARON],
    '34.jpg': [AARON],
    '35.jpg': [AARON],
    '163.jpg': [AARON],
    '58.jpg': [HEIDI],
    '231.jpg': [HEIDI],
    '232.jpg': [AMMA_AND_PAPA, REID_AND_EMILY],
    '233.jpg': [AMMA_AND_PAPA, HEIDI],
    '234.jpg': [AMMA_AND_PAPA, HOLLY, CHRIS, HEIDI],
    '235.jpg': [AMMA_AND_PAPA],
    '236.jpg': [HOLLY],
    '75.jpg': [EVERYONE_ELSE],
    '76.jpg': [EVERYONE_ELSE],
    '77.jpg': [EVERYONE_ELSE],
    '78.jpg': [HOUSE],
    '79.jpg': [HOUSE],
    '80.jpg': [HOUSE],
    '81.jpg': [HOUSE],
    '82.jpg': [HOUSE],
    '83.jpg': [HOUSE],
    '84.jpg': [HOUSE],
    '246.jpg': [HOUSE],
    '108.jpg': [AMMA_AND_PAPA],
    '130.jpg': [JACOB],
    '150.jpg': [DAVID],
    '171.jpg': [GRAYSON],
    '205.jpg': [EVERYONE_ELSE],
    '222.jpg': [BRENT],
    '223.jpg': [BRENT],
    '224.jpg': [BRENT],
    '225.jpg': [BRENT],
    '226.jpg': [BRENT],
    '248.jpg': [BRENT],
    '227.jpg': [BRENT],
    '247.jpg': [AMMA_AND_PAPA],

    // joke bullshit
    '206.jpg': [YETI],
    '207.jpg': [YETI],
    '208.jpg': [YETI],
    '209.jpg': [YETI],
    '210.jpg': [YETI],
    '211.jpg': [YETI],
    '212.jpg': [YETI],
    '213.jpg': [YETI],
    '214.jpg': [YETI],
    '215.jpg': [YETI],
    '216.jpg': [KINKS],
    '217.jpg': [KINKS],
    '218.jpg': [KINKS],

    /* Videos */
    '0.mov': [EBBY],
    '1.mov': [NICK_AND_ALEX],
    '2.mov': [ALYSSA_MATTHEW_AND_GOLDY],
    '3.mov': [ALYSSA_MATTHEW_AND_GOLDY],
    '4.mov': [ALYSSA_MATTHEW_AND_GOLDY],
    '6.mov': [ALYSSA_MATTHEW_AND_GOLDY],
    '5.mov': [GRAYSON]
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
  personToDataMap[AARON].title = 'Aaron <3';
  personToDataMap[ALYSSA_MATTHEW_AND_GOLDY].title = 'Alyssa, Matthew, and Goldy';
  personToDataMap[AMMA_AND_PAPA].title = 'Amma and Papa (like, your parents)';
  personToDataMap[BRENT].title = 'Brent <3';
  personToDataMap[CHARIS].title = 'Charis';
  personToDataMap[CHRIS].title = 'Chris';
  personToDataMap[DAVID].title = 'It\'s You!';
  personToDataMap[DOTTY].title = 'Dotty';
  personToDataMap[EBBY].title = 'Ebby';
  personToDataMap[EMILY_AND_RAMI].title = 'Emily and Rami';
  personToDataMap[GRAYSON].title = 'Grayson';
  personToDataMap[HEIDI].title = 'Heidi';
  personToDataMap[HOLLY].title = 'Holly';
  personToDataMap[HOUSE].title = 'Birthday Wishes from the Creatures of the House at Stratford';
  personToDataMap[JACOB].title = 'Jacob';
  personToDataMap[KINKS].title = 'The Kinks';
  personToDataMap[LISA].title = 'Lisa';
  personToDataMap[MUSWELL].title = 'Moose';
  personToDataMap[NICK_AND_ALEX].title = 'Nick and Alex';
  personToDataMap[REID_AND_EMILY].title = 'Reid and Emily';
  personToDataMap[YETI].title = 'The Abominable Snowman';;
  personToDataMap[EVERYONE_ELSE].title = 'Friends';
}

/**
 * Add quotes to person object if applicable.
 * @param {Object} personToDataMap The person to data map.
 */
function addQuotes(personToDataMap) {
  personToDataMap[AMMA_AND_PAPA].quotes = [
    `In the great wilderness of Northern Canada comes a prince of a man with a story to be told.
    Blessed with brilliance and charm, his ways were tempered with with love and kindness.
    When he is but seven, he could trounce the family in Black Jack, take their money and never look back.
    He could out fish all his peers on any dock with only a sliver of bacon.
    He wasn't always where he said he would be, but that could be forgiven, for he came to his true of sense of duty and devotion to all his family.
    To all ladies who aspire for such a son, when far from road or tower, hovered in a tent in the black night of a great wilderness: Remember this story of yore:
    "Honey, you forgot to kiss me goodnight."
    From, Your Mother`,
    'We love you Dave - From, Your Father'
  ];
  personToDataMap[CHARIS].quotes = ['Superior Dave, my favorite Rave. Have a simply wonderful Birthday! Keep smiling brother. Enjoy whatever family can join in the celebration. Next year will be a real celebration..just dont get the purple mouth your merlot likes to leave with you!! Love you!'];
  personToDataMap[DOTTY].quotes = ['Davidada! I love you so much. You are my only brother and I couldn’t have gotten another as good as you. ❤️🥰'];
  personToDataMap[EBBY].quotes = ['David is a wonderful son-in-law, and I love him like a son.'];
  personToDataMap[GRAYSON].quotes = ['Happy birthday daddio! I love you so so much. We are so thankful for everything you do for us. It has been an especially difficult year, but we can get through anything. Thank you for being you! I love you!'];
  personToDataMap[HEIDI].quotes = ['Happy Birthday, David. I love you so!😍😘David Doodle Bug ❤️'];
  personToDataMap[HOLLY].quotes = ['Happy Birthday to my first baby! You have always been an absolute joy! You bring so much love and laughter into this world! I am so proud of the man that you are! Thank you for being such a great role model for my son! I love you so much and miss you! Have the happiest of Birthdays my Bug!'];
  personToDataMap[JACOB].quotes = ['Happy birthday dad! I love you so much and could never begin to thank you enough for everything you\'ve provided for me, everything you\'ve taught me, and how you have always been there for me.'];
  personToDataMap[LISA].quotes = ['I hope you know that you are the love of my life. You make me so happy. I love your sense of humor, your brilliance, your confidence, your generosity, your supportiveness, your patience, your ingenuity, your strength, your optimism, your boyscout-like preparedness, your charm and your good looks. I want to thank you for allowing mom to come stay with us. I am so grateful that she is here and safe. I hope your birthday is a happy one despite the fact that we are stuck in house quarantine. I am the luckiest person in the world to have found my soul mate at such a young age. I love you so very much.'];
  personToDataMap[MUSWELL].quotes = ['Rappy rirfday Ravid!'];
  personToDataMap[NICK_AND_ALEX].quotes = ['I say uncle! Happy birthday ole chap!'];
  personToDataMap[EVERYONE_ELSE].quotes = [
    'Hey, it’s not old, just wiser - Happy birthday 生日快樂. 萬事如意 - YT', 
    'Happy Birthday to our favorite neighbor. We can’t wait to celebrate your special day. Thinking back to a fun night in Atlanta 2008 - The World is such a Wonderful Place!- Band of Horses, Ode to LRC. Ellie and Claire give a special shout out to DJ DooDoo! - Abby & Scott', 
    'Happy birthday David!! We are so happy to have you all as neighbors and hope to have a celebratory drink with you very soon. xo, Jane and JP', 
    'Happy birthday David!!! Sending you lots of love and happy wishes today. -Tess' 
  ];
}

export default personToDataMap;