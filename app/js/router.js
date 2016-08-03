import RouteRecognizer from 'route-recognizer';
import postsHandler from 'routes/posts';
import postHandler from 'routes/post';

let router = new RouteRecognizer();

router.add([{ path: "/posts", handler: postsHandler }]);
router.add([{ path: "/posts/:post_id", handler: postHandler }]);

export default router;
