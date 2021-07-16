const createFakeComment = (index) => ({
  comment: 'comment text',
  date: new Date().toISOString(),
  id: index,
  rating: 5,
  user: {
    avatarUrl: 'url',
    id: index,
    isPro: true,
    name: 'Alex',
  },
});

const createFakeCommentArray = (index) => new Array(index).fill('').map(()=>createFakeComment(index));

export {createFakeComment, createFakeCommentArray};
