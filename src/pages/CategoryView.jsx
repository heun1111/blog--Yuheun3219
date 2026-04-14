import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';

const CategoryView = () => {
  const { cat } = useParams();
  const filteredPosts = posts.filter(post => post.category === cat);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <header className="mb-16">
        <span className="font-label text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Category Insight</span>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-tight">
          {cat} <span className="text-primary italic">Deep Dive</span>
        </h1>
        <p className="mt-6 text-on-surface-variant text-xl leading-relaxed max-w-xl">
          A curated collection of technical articles and trend reports specifically focused on {cat}.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="group">
            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-surface-container-low mb-6 shadow-sm border border-primary/5">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={post.image} 
                alt={post.title} 
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-label font-bold text-primary uppercase tracking-widest">
                <span className="bg-primary-container px-3 py-1 rounded">{post.category}</span>
                <span className="text-on-surface-variant">{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-on-surface-variant">No items found in this category.</p>
          <Link to="/blog" className="text-primary font-bold mt-4 inline-block underline">View all posts</Link>
        </div>
      )}
    </div>
  );
};

export default CategoryView;
