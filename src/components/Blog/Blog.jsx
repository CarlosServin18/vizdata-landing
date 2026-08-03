import { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { COLORS, STRINGS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Blog() {
  const [openId, setOpenId] = useState(null);
  const ref = useScrollReveal(true);

  return (
    <section id="blog" className="py-16" style={{ backgroundColor: COLORS.lightGray }} ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-2">{STRINGS.blog.title}</h2>
        <p className="text-center mb-12" style={{ color: COLORS.darkLight }}>
          {STRINGS.blog.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {STRINGS.blog.items.map((post) => (
            <div key={post.id} data-reveal>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                body={post.body}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
                iconName={post.icon}
                isOpen={openId === post.id}
                onToggle={() => setOpenId(openId === post.id ? null : post.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
