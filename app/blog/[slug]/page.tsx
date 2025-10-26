import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="container mx-auto px-6 py-12">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="text-blue-600 hover:text-blue-700 mb-8 inline-block"
        >
          ← Back to blog
        </Link>
        
        <header className="mb-8">
          <time className="text-gray-500 text-sm">{post.date}</time>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 
            prose-p:text-gray-700 
            prose-a:text-blue-600 
            prose-strong:text-gray-900
            prose-code:text-pink-600
            prose-code:bg-gray-100
            prose-code:px-1
            prose-code:py-0.5
            prose-code:rounded
            prose-pre:bg-gray-900
            prose-pre:text-gray-100
            prose-img:rounded-lg
            prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

