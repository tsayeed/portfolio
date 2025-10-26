import { getSortedPostsData } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Thoughts on backend development, system design, and software engineering
        </p>

        {allPosts.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {allPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

