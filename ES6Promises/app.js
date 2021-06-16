// we call a promise or handle a promise with '.then'
// Also FetchAPI returns a Promise


const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// remove callback parameter
// create a promise using
// 'return new Promise(function(resolve, reject){})'

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);
            const error = false // mimicin an error

            if(!error) {
                resolve();    // instead of callback();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);    
    })   
    
}

function getPosts() {
    setTimeout(function() {
        let output='';
        posts.forEach(function(post){
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts) // removing getPost and handling with .then()
.catch(function(err){
    console.log(err);
}); // for error