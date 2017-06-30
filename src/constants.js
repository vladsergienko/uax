const Constants = {
  CONTACT_EMAIL: 'binzailani3136@gmail.com',
  MAX_DISTANCE: 50,
  ACTIVE_AGENTS: [
    'Agent1',
    'Agent2',
    'Agent3',
  ],
  IMG_ARRAY: [
    'https://s3.eu-central-1.amazonaws.com/uxa-develop/coffee/2.jpg',
    'https://s3.eu-central-1.amazonaws.com/uxa-develop/coffee/3.jpg',
    'https://s3.eu-central-1.amazonaws.com/uxa-develop/coffee/1.jpg',
  ],
  IMG_ARRAY1: [
    { id: 0, image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/0.jpg' },
    { id: 1, image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/1.jpg' },
    { id: 2, image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/2.jpg' },
  ],
  CHANNELS: [
    { id: 0, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/5.jpg', unread: true, name: 'Bin', message: 'Bin Whats up' },
    { id: 1, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/6.jpg', unread: true, name: 'Andrew', message: 'Hey Andrew, how is going with new design?' },
    { id: 2, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/3.jpg', unread: false, name: 'Marcel', message: 'Hi Marcel' },
    { id: 3, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/2.jpg', unread: false, name: 'Cinderella', message: 'How are you' },
    { id: 4, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/4.jpg', unread: false, name: 'Beast', message: 'I am Gaston and will kill you' },
    { id: 5, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/0.jpg', unread: false, name: 'Elsa', message: 'Nice to meet you' },
    { id: 6, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/1.jpg', unread: false, name: 'Auora', message: 'You are so pretty' },
    { id: 7, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/7.jpg', unread: false, name: 'Ariel', message: 'I do not like the sea' },
    { id: 8, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/8.jpg', unread: false, name: 'Gaston', message: 'Let us kill the beast' },
    { id: 9, avatar: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/avatar/9.jpg', unread: false, name: 'Kristoff', message: 'Where is Elsa?' },
  ],
  CATEGORIES: [
    { key: 0, label: 'Alles', category_de: 'Alls' },
    { key: 1, label: 'Obst & Gemüse', category_de: 'Obst & Gemüse' },
    { key: 2, label: 'Milchprodukte', category_de: 'Milchprodukte' },
    { key: 3, label: 'Eier', category_de: 'Eier' },
    { key: 4, label: 'Brot & Backwaren', category_de: 'Brot & Backwaren' },
    { key: 5, label: 'Cerealien & Müsli', category_de: 'Cerealien & Müsli' },
    { key: 6, label: 'Getränke', category_de: 'Getränke' },
    { key: 7, label: 'Brotaufstriche', category_de: 'Brotaufstriche' },
    { key: 8, label: 'Fertiggerichte, Konserven, Tiefkühlung', category_de: 'Fertiggerichte, Konserven, Tiefkühlung' },
    { key: 9, label: 'Gewürze & Kochhilfen, Backhilfen', category_de: 'Gewürze & Kochhilfen, Backhilfen' },
    { key: 10, label: 'Nudeln & Reis', category_de: 'Nudeln & Reis' },
    { key: 11, label: 'Öl, Dressing & Co', category_de: 'Öl, Dressing & Co' },
    { key: 12, label: 'Süßigkeiten', category_de: 'Süßigkeiten' },
    { key: 13, label: 'Baby & Kind', category_de: 'Baby & Kind' },
    { key: 14, label: 'Tiernahrung', category_de: 'Tiernahrung' },
    { key: 15, label: 'Frisch gekocht/ gebacken', category_de: 'Frisch gekocht/ gebacken' },
    { key: 16, label: 'Verschiedenes', category_de: 'Verschiedenes' },
    { key: 17, label: 'Sonstiges', category_de: 'Sonstiges' },
  ],
  LOREM_TEXT: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
when an unknown printer took a galley of type and scrambled it to make a \
type specimen book. It has survived not only five centuries, but also the \
leap into electronic typesetting, remaining essentially unchanged. It was \
popularised in the 1960s with the release of Letraset sheets containing \
Lorem Ipsum passages, and more recently with desktop publishing software \
like Aldus PageMaker including versions of Lorem Ipsum.
`,
  DISCOVER_ITEMS: [
    {
      id: 0,
      name: 'name0',
      category: 'category0',
      image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/0.jpg',
      coord: { lat: 0, long: 0 },
      expiary: '31.01.2017',
    },
    {
      id: 1,
      name: 'name1',
      category: 'category1',
      image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/1.jpg',
      coord: { lat: 0, long: 0 },
      expiary: '31.01.2017',
    },
    // {
    //   id: 2,
    //   name: 'name2',
    //   category: 'category2',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/2.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 3,
    //   name: 'name3',
    //   category: 'category3',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/3.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 4,
    //   name: 'name4',
    //   category: 'category4',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/4.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 5,
    //   name: 'name5',
    //   category: 'category5',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/5.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 6,
    //   name: 'name6',
    //   category: 'category6',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/6.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 7,
    //   name: 'name7',
    //   category: 'category7',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/7.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 8,
    //   name: 'name8',
    //   category: 'category8',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/8.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 9,
    //   name: 'name9',
    //   category: 'category9',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/9.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 10,
    //   name: 'name10',
    //   category: 'category10',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/10.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 11,
    //   name: 'name11',
    //   category: 'category11',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/11.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 12,
    //   name: 'name12',
    //   category: 'category12',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/12.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 13,
    //   name: 'name13',
    //   category: 'category13',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/0.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 14,
    //   name: 'name14',
    //   category: 'category14',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/1.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 15,
    //   name: 'name15',
    //   category: 'category15',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/2.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 16,
    //   name: 'name16',
    //   category: 'category16',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/3.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 17,
    //   name: 'name17',
    //   category: 'category17',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/4.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 18,
    //   name: 'name18',
    //   category: 'category18',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/5.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 19,
    //   name: 'name19',
    //   category: 'category19',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/6.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 20,
    //   name: 'name20',
    //   category: 'category20',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/7.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 21,
    //   name: 'name21',
    //   category: 'category21',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/8.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 22,
    //   name: 'name22',
    //   category: 'category22',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/9.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 23,
    //   name: 'name23',
    //   category: 'category23',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/10.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 24,
    //   name: 'name24',
    //   category: 'category24',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/11.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
    // {
    //   id: 25,
    //   name: 'name25',
    //   category: 'category25',
    //   image: 'https://s3.eu-central-1.amazonaws.com/uxa-develop/12.jpg',
    //   coord: { lat: 0, long: 0 },
    //   expiary: '31.01.2017',
    // },
  ],
};

export default Constants;