import { v4 as uuid } from 'uuid';

export const defaultUser = {
  id: uuid(),
  username: 'username',
  name: 'name',
  // profile_image:
  //   'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF',
  // profile_image:
  //   'https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg',
  profile_image:
    'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/11820631_978795985506628_439102387_a.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=2-23pOLOUkwAX_P5PwY&oh=5bbe2ae6ba6b7c88cf859f4198a59cbc&oe=5F8A8C1F',
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: 'username',
    name: 'name',
    // profile_image:
    //   'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF',
    // profile_image:
    //   'https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/11820631_978795985506628_439102387_a.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=2-23pOLOUkwAX_P5PwY&oh=5bbe2ae6ba6b7c88cf859f4198a59cbc&oe=5F8A8C1F',
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
  user: defaultUser,
  media:
    'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/116335671_183001863241481_6928480134982823392_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=wioVcGMjJJ4AX-tmzMx&_nc_tp=15&oh=b440e6b232a937271ce9f3e63dc187ef&oe=5F880326',
  // media:
  //   'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/80126161_2456912044637768_8188145638093587415_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=108&_nc_ohc=GAkCBeSLLnwAX_Xn25U&oh=58af570f5ad051b24583c388b946784a&oe=5EA44484',
  comments: [],
  created_at: '2020-02-28T03:08:14.522421+00:00',
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
      'https://scontent-lax3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/116335671_183001863241481_6928480134982823392_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=wioVcGMjJJ4AX-tmzMx&_nc_tp=15&oh=b440e6b232a937271ce9f3e63dc187ef&oe=5F880326',
    // media:
    //   'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/80126161_2456912044637768_8188145638093587415_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=108&_nc_ohc=GAkCBeSLLnwAX_Xn25U&oh=58af570f5ad051b24583c388b946784a&oe=5EA44484',
    comments: [],
    created_at: '2020-02-28T03:08:14.522421+00:00',
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: 'follow',
    user: defaultUser,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
  {
    id: uuid(),
    type: 'like',
    user: defaultUser,
    post: defaultPost,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: 'me',
  name: 'myself',
  profile_image:
    'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF',
  website: 'https://react12.io',
  email: 'me@gmail.com',
  bio: 'This is my bio',
  phone_number: '555-555-5555',
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser],
};
