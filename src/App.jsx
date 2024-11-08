import Post from "./components/Post";
function App() {
  return (
    <main>
      <Post author="Kevin" body="React.js is awesome!" />
      <Post author="Manny" body="Check out Next.js too!" />
      <Post />
      <Post />
    </main>
  );
}

export default App;
