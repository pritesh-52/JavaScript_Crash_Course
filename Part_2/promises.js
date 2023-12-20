const user="https://api.github.com/users/pritesh-52";

const data=fetch(user);


data.then(function(user){
    console.log(user);
})
console.log(data);


/* fetching userdata and display name*/
const api = "https://jsonplaceholder.typicode.com/posts/1/comments";

fetch(api)
  .then(response => response.json())
  .then(comments => {
    console.log(comments);
    const commentInfo = comments.map(comment => {
      return {
        id: comment.id,
        postId: comment.postId,
        name: comment.name,
        email: comment.email,

      };
    });
    console.log("Comment Info:", commentInfo);
  })
  .catch((e) => {
    console.error(`Error fetching data: ${e}`);
  });
