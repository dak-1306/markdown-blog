import MainLayout from "../components/layout/MainLayout.jsx";
import Card from "../components/ui/Card.jsx";
import { getAllPosts } from "../services/posts.js";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <MainLayout title="Welcome to My Blog">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <p className="text-center text-text-muted col-span-full">
              No posts available.
            </p>
          )}
          {posts.length > 0 &&
            posts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.excerpt}
                img={post.img}
                author={post.author}
                date={post.date}
                tags={post.tags}
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
