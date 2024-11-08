import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Kevin" body="React.js is awesome!" />
        <Post author="Manny" body="Check out Next.js too!" />
      </ul>
    </>
  );
}

export default PostsList;
