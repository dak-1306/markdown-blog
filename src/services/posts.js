const STORAGE_KEY = "markdown-blog:posts";

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function writeStore(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export async function getAllPosts() {
  return readStore();
}

export async function getPostById(id) {
  return readStore().find((p) => p.id === id) || null;
}

export async function createPost(data) {
  const posts = readStore();
  const now = new Date().toISOString();
  const post = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    title: data.title || "",
    slug: data.slug || "",
    excerpt: data.excerpt || "",
    content: data.content || "",
    tags: data.tags || [],
    createdAt: now,
    updatedAt: now,
  };
  posts.unshift(post);
  writeStore(posts);
  return post;
}

export async function updatePost(id, patch) {
  const posts = readStore();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...patch, updatedAt: new Date().toISOString() };
  writeStore(posts);
  return posts[idx];
}

export async function deletePost(id) {
  const posts = readStore().filter((p) => p.id !== id);
  writeStore(posts);
  return true;
}
