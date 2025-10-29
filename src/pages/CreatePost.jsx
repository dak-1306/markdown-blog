import MainLayout from "../components/layout/MainLayout.jsx";
function CreatePost() {
  return (
    <MainLayout>
      <h1>Create a New Post</h1>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </MainLayout>
  );
}
export default CreatePost;
