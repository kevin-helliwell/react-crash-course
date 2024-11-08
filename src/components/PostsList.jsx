import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Kevin" body="React.js is awesome!" />
      <Post author="Manny" body="Check out Next.js too!" />
    </ul>
  );
}

export default PostsList;
