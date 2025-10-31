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

function getNextId(posts) {
  if (!Array.isArray(posts) || posts.length === 0) return 1;
  const ids = posts.map((p) => {
    const n = Number(p.id);
    return Number.isFinite(n) ? n : -Infinity;
  });
  const max = Math.max(...ids, 0);
  return max <= 0 ? 1 : max + 1;
}

export async function getAllPosts() {
  return readStore();
}

export async function getPostById(id) {
  const posts = readStore();
  return posts.find((p) => Number(p.id) === Number(id)) || null;
}

export async function createPost(data) {
  const posts = readStore();
  const now = new Date().toISOString();
  const post = {
    id: getNextId(posts), // numeric sequential id
    title: data.title || "",
    slug: data.slug || "",
    excerpt: data.excerpt || "",
    content: data.content || "",
    img: data.img || "",
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
  const idx = posts.findIndex((p) => Number(p.id) === Number(id));
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...patch, updatedAt: new Date().toISOString() };
  writeStore(posts);
  return posts[idx];
}

export async function deletePost(id) {
  const posts = readStore().filter((p) => Number(p.id) !== Number(id));
  writeStore(posts);
  return true;
}
