import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Insights & Updates</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-tight">The Cloud-Scape Journal</h1>
            <p className="mt-6 text-on-surface-variant text-xl leading-relaxed max-w-xl">Exploring the intersection of lightweight architecture and human-centric software design. Curated for the modern developer.</p>
          </div>
          <div className="w-full md:w-80">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-xl border border-surface-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-outline/60 text-on-surface" 
                placeholder="Search software trends..." 
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentPosts.map((post) => (
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
      </section>

      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center space-x-4">
          <button 
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary-container disabled:opacity-30 transition-all"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-12 h-12 rounded-full font-bold text-sm transition-all ${currentPage === i + 1 ? 'bg-primary text-white scale-110 shadow-lg' : 'hover:bg-primary-container'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary-container disabled:opacity-30 transition-all"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-on-surface-variant">No articles found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;
