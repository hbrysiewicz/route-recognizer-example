import router from 'router';

let result = router.recognize("/posts");

console.log('Response from call to "/posts":', JSON.stringify(result));

result = router.recognize("/posts/1");

console.log('Response from call to "/posts/1":', JSON.stringify(result));

result = router.recognize("/posts?sortBy=name");

console.log('Response from call to "/posts?sortBy=name":', JSON.stringify(result));
