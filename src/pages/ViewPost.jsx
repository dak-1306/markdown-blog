import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { markdownToHtml } from "../utils/markdownParser";
import { getPostById } from "../services/posts";

function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const post = await getPostById(id);
      setPost(post);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <MainLayout title="Loading...">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center py-12">
            <div className="text-text-muted">Loading post...</div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!post) {
    return (
      <MainLayout title="Post Not Found">
        <div className="container">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-text mb-4">
              Post Not Found
            </h1>
            <p className="text-text-muted mb-6">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={post.title}>
      <div className="max-w-6xl mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:text-primary-dark mb-4 text-sm"
            >
              ← Back to Posts
            </Link>

            {post.img && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl font-bold font-heading text-text mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
              {post.author && (
                <span className="font-medium text-text">By {post.author}</span>
              )}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-primary-light text-primary-dark border border-primary-20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text prose-p:text-text prose-p:leading-relaxed prose-a:text-primary prose-a:hover:text-primary-dark prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(post.content),
            }}
          />
        </article>
      </div>
    </MainLayout>
  );
}
export default ViewPost;
