import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.jsx";
import PostForm from "../components/ui/PostForm.jsx";
import { createPost } from "../services/posts.js";
import { markdownToHtml, slugify } from "../utils/markdownParser.js";

const DRAFT_KEY = "markdown-blog:draft:create";

function CreatePost() {
  const navigate = useNavigate();
  const [values, setValues] = useState(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            tags: [],
            newTag: "",
            previewHtml: "",
          };
    } catch {
      return {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        tags: [],
        newTag: "",
        previewHtml: "",
      };
    }
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // update previewHtml when content changes
  useEffect(() => {
    setValues((v) => ({ ...v, previewHtml: markdownToHtml(v.content || "") }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.content]);

  // persist draft to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
    } catch {}
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // quick tag entry: if typing newTag and added a comma, split and add
    if (name === "newTag") {
      if (value.includes(",")) {
        const parts = value
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        if (parts.length > 0) {
          setValues((prev) => ({
            ...prev,
            tags: [...(prev.tags || []), ...parts],
            newTag: "",
          }));
          return;
        }
      }
      setValues((prev) => ({ ...prev, newTag: value }));
      return;
    }

    // generic inputs
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = (tag) => {
    if (!tag || !tag.trim()) return;
    setValues((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), tag.trim()],
      newTag: "",
    }));
  };

  const handleRemoveTag = (index) => {
    setValues((prev) => {
      const tags = [...(prev.tags || [])];
      tags.splice(index, 1);
      return { ...prev, tags };
    });
  };

  const validate = () => {
    const err = {};
    if (!values.title || !values.title.trim()) err.title = "Title is required";
    if (!values.content || !values.content.trim())
      err.content = "Content is required";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      // include any pending newTag as tag
      const tags = [...(values.tags || [])];
      if (values.newTag && values.newTag.trim()) {
        tags.push(
          ...values.newTag
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        );
      }

      const slug =
        values.slug && values.slug.trim()
          ? values.slug.trim()
          : slugify(values.title || "");
      const post = await createPost({
        title: values.title.trim(),
        slug,
        excerpt: values.excerpt?.trim() || "",
        content: values.content,
        tags,
      });

      // clear draft
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {}

      // navigate to view post by id
      navigate(`/posts/${post.id}`);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Failed to save post" });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // just navigate back
    navigate(-1);
  };

  return (
    <MainLayout title="Create Post">
      <div className="max-w-3xl mx-auto">
        <PostForm
          values={values}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          errors={errors}
          loading={loading}
        />

        {/* Tag quick controls (rendered next to form) */}
        <div className="mt-3 flex gap-2 flex-wrap">
          {(values.tags || []).map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleRemoveTag(i)}
              className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs"
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
                border: "1px solid var(--color-primary-20)",
              }}
            >
              {t}
              <span className="ml-1 text-text-muted" aria-hidden>
                ×
              </span>
            </button>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default CreatePost;
