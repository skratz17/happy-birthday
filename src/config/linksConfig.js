const images = {};
const r = require.context('../assets/linkImages/', false, /\.jpg/);
r.keys().forEach(key => images[key.replace('./', '')] = r(key));

const linksConfig = [
  { image: images['lisa.jpg'], altText: 'Lisa', id: 'lisa', to: '/lisa', quote: 'I hope you know that you are the love of my life. You make me so happy. I hope your birthday is a happy one despite the fact that we are stuck in house quarantine. I am the luckiest person in the world to have found my soul mate at such a young age. I love you so very much.' },
  { image: images['grayson.jpg'], altText: 'Grayson', id: 'grayson', to: '/grayson' },
  { image: images['jacob.jpg'], altText: 'Jacob', id: 'jacob', to: '/jacob' },
  { image: images['brent.jpg'], altText: 'Brent', id: 'brent', to: '/jacob', quote: 'Happy birthday! 🍰🎂' },
  { image: images['heidi.jpg'], altText: 'Heidi', id: 'heidi', to: '/heidi', quote: 'Happy Birthday, David. I love you so!😍😘David Doodle Bug ❤️' },
  { image: images['reid.jpg'], altText: 'Reid', id: 'reid', to: '/reid-and-emily', quote: 'Happy Birthday! Stay healthy and hope to see you soon!' },
  { image: images['emilyFinchem.jpg'], altText: 'Emily', id: 'emilyFinchem', to: '/reid-and-emily', quote: 'Happy Birthday! Stay healthy and hope to see you soon!'  },
  { image: images['holly.jpg'], altText: 'Holly', id: 'holly', to: '/holly', quote: 'To David, Happy Birthday to my first baby! You have always been an absolute joy! You bring so much love and laughter into this world! I am so proud of the man that you are! Thank you for being such a great role model for my son! I love you so much and miss you! Have the happiest of Birthdays my Bug! Love, Holly' },
  { image: images['nick.jpg'], altText: 'Nick', id: 'nick', to: '/nick-and-alex', quote: 'I say uncle! Happy birthday ole chap!' },
  { image: images['alex.jpg'], altText: 'Alex', id: 'alex', to: '/nick-and-alex' },
  { image: images['papa.jpg'], altText: 'Papa', id: 'papa', to: '/amma-and-papa' },
  { image: images['amma.jpg'], altText: 'Amma', id: 'amma', to: '/amma-and-papa' },
  { image: images['dotty.jpg'], altText: 'Dotty', id: 'dotty', to: '/dotty', quote: 'Davidada! I love you so much. You are my only brother and I couldn’t have gotten another as good as you. ❤️🥰' },
  { image: images['charis.jpg'], altText: 'Charis', id: 'charis', to: '/charis', quote: 'Superior Dave, my favorite Rave. Have a simply wonderful Birthday! Keep smiling brother. Enjoy whatever family can join in the celebration. Next year will be a real celebration..just dont get the purple mouth your merlot likes to leave with you!! Love you!' },
  { image: images['chris.jpg'], altText: 'Chris', id: 'chris', to: '/chris' },
];

export default linksConfig;