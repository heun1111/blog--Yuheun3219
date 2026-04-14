import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import PostDetail from './pages/PostDetail';
import Sitemap from './pages/Sitemap';
import CategoryView from './pages/CategoryView';

function App() {
  return (
    <Router>
      <Layout>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/category/:cat" element={<CategoryView />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
