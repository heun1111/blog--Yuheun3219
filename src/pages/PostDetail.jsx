import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-40 text-center">
        <h1 className="text-4xl font-bold mb-8">Article Not Found</h1>
        <Link to="/blog" className="text-primary font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="pt-20 pb-32 px-8 max-w-7xl mx-auto">
      <header className="mb-24 text-center max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <span className="bg-primary text-white px-6 py-1.5 rounded-full text-xs font-extrabold tracking-[0.2em] uppercase">
            {post.category} Report 2024
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-on-surface mb-10 leading-[1.05]">
          {post.title}
        </h1>
        <p className="text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto">
          {post.summary}
        </p>
      </header>

      <div className="relative mb-32 rounded-xl overflow-hidden h-[600px] shadow-2xl shadow-primary/5">
        <img className="w-full h-full object-cover" src={post.image} alt={post.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <div className="asymmetric-grid">
        <aside className="hidden lg:block col-span-3 sticky top-40 h-fit space-y-16">
          <div>
            <h4 className="text-xs font-black text-primary mb-6 uppercase tracking-[0.25em]">The Author</h4>
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 rounded-full bg-primary-container p-1 border-2 border-primary/20 flex items-center justify-center font-bold text-primary">
                EV
              </div>
              <div>
                <p className="font-black text-on-surface text-lg">Elena Vance</p>
                <p className="text-sm text-on-surface-variant font-medium">Lead Strategist</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black text-primary mb-6 uppercase tracking-[0.25em]">Must-Know Trends</h4>
            <ul className="space-y-6 text-base font-semibold text-on-surface">
              <li className="flex items-center space-x-3 group cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Atmospheric Layering</span>
              </li>
              <li className="flex items-center space-x-3 group cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
                <span className="group-hover:text-primary transition-colors">Inclusive Interactivity</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className="col-span-12 lg:col-span-8 lg:col-start-5 space-y-24">
          <section className="space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight">The Digital Transformation</h2>
            <p className="text-2xl leading-relaxed text-on-surface-variant">
              {post.content}
            </p>
            <p className="text-2xl leading-relaxed text-on-surface-variant">
              By utilizing <code className="bg-primary/10 px-3 py-1 rounded text-primary text-lg font-bold">ethereal-logic</code> patterns, we are creating interfaces that feel more like physical sheets of fine paper than rigid digital grids.
            </p>
          </section>

          <div className="bg-primary text-white rounded-xl p-16 text-center space-y-10 shadow-2xl shadow-primary/30">
            <h2 className="text-4xl font-black tracking-tight">Ready to dive deeper?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">Download our comprehensive guide to implementing the Ethereal Design System in your next project.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-50 active:scale-95 transition-all">Download Design Kit</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
