import MainLayout from "../components/layout/MainLayout.jsx";
import Card from "../components/ui/Card.jsx";
import posts from "../assets/data.js";

function Home() {
  return (
    <MainLayout title="Welcome to My Blog">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            // spread the post so Card receives title, content, img, author, date, tags
            <Card key={post.id} {...post} href={`/posts/${post.id}`} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
