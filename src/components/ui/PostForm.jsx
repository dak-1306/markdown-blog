import React from "react";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPen,
  faTimes,
  faSave,
  faKeyboard,
  faSpinner,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function PostForm({
  values = {},
  onChange,
  onSubmit,
  onCancel,
  errors = {},
  loading = false,
}) {
  const [showPreview, setShowPreview] = React.useState(false);

  return (
    <form
      onSubmit={onSubmit}
      className="bg-surface rounded-lg p-6 border shadow-lg"
      style={{
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {/* Title - Full Width, Primary Focus */}
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-base font-semibold text-text mb-2 font-heading"
        >
          Post Title <span className="text-error">*</span>
        </label>
        <input
          id="title"
          name="title"
          required
          value={values.title ?? ""}
          onChange={onChange}
          placeholder="Enter your post title..."
          className="block w-full rounded-lg px-4 py-3 border-2 bg-white text-text text-lg font-medium transition-all duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50"
          style={{
            borderColor: errors.title
              ? "var(--color-error)"
              : "var(--color-border)",
          }}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title && (
          <p className="text-sm text-error mt-2 flex items-center gap-1">
            <span>⚠</span> {errors.title}
          </p>
        )}
      </div>

      {/* Content - Full Width, Main Editing Area */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="content"
            className="block text-base font-semibold text-text font-heading"
          >
            Content <span className="text-error">*</span>
          </label>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="text-sm text-primary hover:text-primary-dark transition-colors px-3 py-1 rounded-md border border-primary/20 hover:bg-primary/5 inline-flex items-center gap-2"
          >
            <FontAwesomeIcon icon={showPreview ? faPen : faEye} />
            <span>{showPreview ? "Edit" : "Preview"}</span>
          </button>
        </div>

        <div className="relative">
          <textarea
            id="content"
            name="content"
            value={values.content ?? ""}
            onChange={onChange}
            placeholder="Write your content in Markdown...

# Your Heading
Your content here..."
            rows={16}
            className="block w-full rounded-lg px-4 py-3 border-2 bg-white text-text font-mono text-sm leading-relaxed transition-all duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50 resize-y"
            style={{
              borderColor: errors.content
                ? "var(--color-error)"
                : "var(--color-border)",
              minHeight: "400px",
            }}
            aria-invalid={errors.content ? "true" : "false"}
          />
          <div className="absolute bottom-3 right-3 text-xs text-text-muted bg-white/80 px-2 py-1 rounded">
            {(values.content || "").length} chars
          </div>
        </div>
        {errors.content && (
          <p className="text-sm text-error mt-2 flex items-center gap-1">
            <span>⚠</span> {errors.content}
          </p>
        )}
      </div>

      {/* Excerpt - Full Width */}
      <div className="mb-6">
        <label
          htmlFor="excerpt"
          className="block text-sm font-semibold text-text mb-2"
        >
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={values.excerpt ?? ""}
          onChange={onChange}
          placeholder="Brief summary of your post..."
          rows={3}
          className="block w-full rounded-lg px-4 py-3 border-2 bg-white text-text transition-all duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50 resize-none"
          style={{ borderColor: "var(--color-border)" }}
        />
        <p className="text-xs text-text-muted mt-1 flex items-center justify-between">
          <span>Short description shown on listing pages</span>
          <span
            className={`${
              (values.excerpt || "").length > 160 ? "text-warning" : ""
            }`}
          >
            {(values.excerpt || "").length}/160
          </span>
        </p>
      </div>

      {/* Slug & Tags - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-semibold text-text mb-2"
          >
            URL Slug
          </label>
          <input
            id="slug"
            name="slug"
            value={values.slug ?? ""}
            onChange={onChange}
            placeholder="url-friendly-slug"
            className="block w-full rounded-lg px-4 py-3 border-2 bg-white text-text font-mono text-sm transition-all duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50"
            style={{ borderColor: "var(--color-border)" }}
          />
          <p className="text-xs text-text-muted mt-1">
            Leave empty to auto-generate from title
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Tags
          </label>
          <input
            name="newTag"
            value={values.newTag ?? ""}
            onChange={onChange}
            placeholder="Add tags (comma-separated)..."
            className="block w-full rounded-lg px-4 py-3 border-2 bg-white text-text transition-all duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50"
            style={{ borderColor: "var(--color-border)" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const tag = e.target.value.trim();
                if (tag) {
                  onChange({ target: { name: "newTag", value: tag + "," } });
                }
              }
            }}
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {(values.tags || []).map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  border: "1px solid var(--color-primary-20)",
                }}
              >
                {tag}
                <button
                  type="button"
                  onClick={() => {
                    const newTags = [...(values.tags || [])];
                    newTags.splice(i, 1);
                    onChange({ target: { name: "tags", value: newTags } });
                  }}
                  className="ml-1 text-primary-dark/60 hover:text-primary-dark transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border/50">
        <div className="flex items-center gap-3">
          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={loading}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin />
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Publish Post</span>
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="medium"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>

        <div className="flex items-center gap-3 text-sm text-text-muted">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faSave} />
            <span>Auto-saved</span>
          </div>
          <div className="w-px h-4 bg-border"></div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faKeyboard} />
            <span>Ctrl+S to save</span>
          </div>
        </div>
      </div>

      {/* Collapsible Preview */}
      {showPreview && values.previewHtml && (
        <div className="mt-6 border-t border-border/50 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text font-heading">
              Preview
            </h3>
            <button
              type="button"
              onClick={() => setShowPreview(false)}
              className="text-text-muted hover:text-text transition-colors"
              aria-label="Close preview"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div
            className="bg-white border-2 border-primary/10 rounded-lg p-6 max-h-96 overflow-y-auto"
            style={{
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div
              className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-text prose-p:text-text prose-a:text-primary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: values.previewHtml }}
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default PostForm;
