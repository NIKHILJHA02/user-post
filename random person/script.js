const container = document.querySelector('#main');

const createElement = (element, innerHTML, attribute) => {
    const newElement = document.createElement(element);
    newElement.innerHTML = innerHTML;
    for (const [attrName, attrValue] of Object.entries(attribute)) {
        newElement.setAttribute(attrName, attrValue);
    }
    return newElement;
};

const bindEvent = (target, type, callbackFunc) => {
    target.addEventListener(type, callbackFunc);
};

let innerDivAttr = {id: 'inner-div'}
let innerDiv = createElement('div', '', innerDivAttr)
container.appendChild(innerDiv)

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();

        for (let i = 0; i < 2; i++) {
            const user = data[i];
            const userDivAttr = { id: `user-div-${user.id}` };
            const userDiv = createElement('div', '', userDivAttr);
            innerDiv.appendChild(userDiv);

            // User Details
            let fullName = createElement('h3', `${user.name}`, '');
            userDiv.appendChild(fullName);

            let userName = createElement('p', `User Name: ${user.username}`, '');
            userDiv.appendChild(userName);

            let email = createElement('p', `Email- ${user.email}`, '');
            userDiv.appendChild(email);

            let phone = createElement('p', `Phone- ${user.phone}`, '');
            userDiv.appendChild(phone);

            let button = createElement('button', 'Posts', '');
            userDiv.appendChild(button);

            // Post button logic
            bindEvent(button, 'click', (userId) => {
                getPosts(user.id);
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const getPosts = async (userId,userDiv) => {
    try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postResponse.ok) {
            throw new Error(postResponse.status);
        }
        const postData = await postResponse.json();

        // Create a div to display posts
        const postDiv = createElement('div', '', {});
        container.appendChild(postDiv);

        for (let i=0; i<5; i++) {
            let post = postData[i]
            let postTitle = createElement('h4', post.title, '');
            postDiv.appendChild(postTitle);

            let postBody = createElement('p', post.body, '');
            postDiv.appendChild(postBody);
        }
    } catch (error) {
        console.log(error);
    }
};

getUsers();
