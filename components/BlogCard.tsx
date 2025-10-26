import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';

export default function BlogCard({ post }: { post: PostMetadata }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-blue-300 hover:-translate-y-1 flex flex-col">
        <time className="text-sm text-blue-600 font-medium">{post.date}</time>
        <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors mt-auto">
          Read article 
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </article>
    </Link>
  );
}

