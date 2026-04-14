import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

const Home = () => {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      {/* Hero Section */}
      <header className="mb-24 text-center max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <span className="bg-primary text-white px-6 py-1.5 rounded-full text-xs font-extrabold tracking-[0.2em] uppercase">Trend Report 2024</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-on-surface mb-10 leading-[1.05]">
          Modern Software in <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-dim to-primary">Ethereal</span> Times
        </h1>
        <p className="text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto">
          Exploring the shift from clinical utility to airy, editorial digital experiences. Discover how <span className="highlight-accent font-medium">soft UI</span> and scalability are redefining the landscape.
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative mb-32 rounded-xl overflow-hidden h-[600px] shadow-2xl shadow-primary/5">
        <img className="w-full h-full object-cover" src={featuredPost.image} alt={featuredPost.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Featured Articles Grid */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Latest Insights</h2>
            <Link to="/blog" className="text-primary font-bold flex items-center hover:translate-x-1 transition-transform">
                View all stories <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low mb-6 shadow-sm">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={post.image} 
                  alt={post.title} 
                />
              </div>
              <span className="bg-tertiary text-white px-3 py-1 rounded font-label text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
                {post.category}
              </span>
              <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-4 text-on-surface-variant text-base leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-primary text-white rounded-xl p-16 text-center space-y-10 shadow-2xl shadow-primary/30">
        <h2 className="text-4xl font-black tracking-tight">Ready to modernize your perspective?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">Join 12k+ readers receiving our monthly deep-dive into the Ethereal Design System and modern engineering.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
          <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-50 active:scale-95 transition-all">Join the Digest</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
