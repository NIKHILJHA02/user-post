// let getPosts = async (userId) => {
//     try {
//         const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts=${userId}`)
//         if (!postResponse.ok) {
//             throw new Error(postResponse.status)
//         }
//         const postData = await postResponse.json()

//         // Display only the first 5 posts
//         const postsToShow = postData.slice(0, 5);

//         //careate post div

//         const postdiv = createElement('div', '', {})
//         container.appendChild(postdiv)

//         for (const post of postsToShow) {
//             let postTitle = createElement('h4', post.title, '');
//             postdiv.appendChild(postTitle);

//             let postBody = createElement('p', post.body, '');
//             postdiv.appendChild(postBody);
//         }
//         console.log(postData);
//     } catch (error) {
//         console.log(error);
//     }
// }
