let upvotes = 0;
let downvotes = 0;

document.getElementById('upvote').addEventListener('click', () => {
  upvotes++;
  document.getElementById('upvote-count').textContent = upvotes;
});

document.getElementById('downvote').addEventListener('click', () => {
  downvotes++;
  document.getElementById('downvote-count').textContent = downvotes;
});
//what tf