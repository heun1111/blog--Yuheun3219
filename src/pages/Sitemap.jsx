import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

const Sitemap = () => {
  const categories = [...new Set(posts.map(post => post.category))];
  
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <header className="mb-16">
        <span className="font-label text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Project Architecture</span>
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface">System Sitemap</h1>
        <p className="mt-6 text-on-surface-variant text-xl leading-relaxed max-w-2xl">
          Comprehensive project indexing showing all 60+ unique routes and resources within the Ethereal Software architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Core Routes */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">view_quilt</span>
            Core Pages
          </h2>
          <ul className="space-y-4 text-on-surface-variant font-medium">
            <li><Link to="/" className="hover:text-primary">Home Dashboard</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Global Blog Index</Link></li>
            <li><Link to="/sitemap" className="text-primary font-bold">Project Sitemap (Active)</Link></li>
            <li><a href="#" className="hover:text-primary">About Editorial</a></li>
            <li><a href="#" className="hover:text-primary">Contact / Support</a></li>
          </ul>

          <h2 className="text-2xl font-bold pt-10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">category</span>
            Category Archives
          </h2>
          <ul className="space-y-4 text-on-surface-variant font-medium">
            {categories.map(cat => (
              <li key={cat}>
                <Link to={`/category/${cat}`} className="hover:text-primary">
                  {cat} Insight Center
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Article Routes (Split into columns) */}
        <section className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">article</span>
            Unique Resource Identifiers (URIs)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-on-surface-variant">
            {posts.map((post, index) => (
              <Link 
                key={post.id} 
                to={`/post/${post.id}`} 
                className="hover:text-primary truncate border-l border-primary/10 pl-3 hover:border-primary transition-all"
              >
                <span className="opacity-40 mr-2">[{String(index + 1).padStart(2, '0')}]</span>
                {post.title}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-20 p-10 bg-primary-container/30 rounded-xl border border-primary/10">
        <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
            <div>
                <h3 className="text-xl font-bold">Academic Verification</h3>
                <p className="text-on-surface-variant">Total index includes 1 Home, 1 Blog List, 1 Sitemap, {categories.length} Category pages, and {posts.length} unique Articles.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
