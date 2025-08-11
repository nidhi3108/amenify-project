
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Interior Design Trends to Watch in 2024',
      excerpt:
        'Affordable Turnkey Interior Design for 2 BHK Flats: A Complete Guide',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      author: 'Elena Rodriguez',
      date: 'March 15, 2024',
      category: 'Trends',
      readTime: '5 min read',
      link: 'https://www.amenify.in/blog/affordable-turnkey-interior-design-for-2-bhk-flats',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette for Your Home',
      excerpt:
        '10 Stunning POP Ceiling Designs to Modernise Your Kitchen in 2025',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
      author: 'Sophie Chen',
      date: 'March 10, 2024',
      category: 'Design Tips',
      readTime: '7 min read',
      link: 'https://www.amenify.in/blog/pop-ceiling-designs-for-kitchens-amenify',
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces: Design Solutions That Work',
      excerpt:
        'Top Interior Design Trends Shaping Business Growth in 2025: From Sustainability to Smart Technology',
      image:
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      author: 'Marcus Thompson',
      date: 'March 5, 2024',
      category: 'Small Spaces',
      readTime: '6 min read',
      link: 'https://www.amenify.in/blog/pop-ceiling-designs-for-kitchens-amenify',
    },
    {
      id: 4,
      title: 'Sustainable Design: Eco-Friendly Interior Solutions',
      excerpt:
        'The Shri Ram Wonder Years: A Colorful, Creative Preschool Redesign to Inspire Young Minds',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      author: 'Elena Rodriguez',
      date: 'February 28, 2024',
      category: 'Sustainability',
      readTime: '8 min read',
      link: 'https://www.amenify.in/blog/transforming-learning-environments-the-power-of-purposeful-design-for-schools',
    },
    {
      id: 5,
      title: 'Lighting Design: Setting the Perfect Mood',
      excerpt:
        '9 Stunning Ceiling Light Designs to Brighten Your Home in 2025 | Top Trends & Ideas',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
      author: 'David Park',
      date: 'February 22, 2024',
      category: 'Lighting',
      readTime: '5 min read',
      link: 'https://www.amenify.in/blog/pop-ceiling-designs-for-kitchens-amenify',
    },
    {
      id: 6,
      title: 'Budget-Friendly Design Hacks for Every Room',
      excerpt: '9 Stunning Ceiling Light Designs to Brighten Your Home in 2025 | Top Trends & Ideas',
      image:
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      author: 'Sophie Chen',
      date: 'February 18, 2024',
      category: 'Budget Tips',
      readTime: '6 min read',
      link: 'https://www.amenify.in/blog/pop-ceiling-designs-for-kitchens-amenify',
    },
      {
      id: 1,
      title: '10 Interior Design Trends to Watch in 2024',
      excerpt:
        'Affordable Turnkey Interior Design for 2 BHK Flats: A Complete Guide',
      image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      author: 'Elena Rodriguez',
      date: 'March 15, 2024',
      category: 'Trends',
      readTime: '5 min read',
      link: 'https://www.amenify.in/blog/affordable-turnkey-interior-design-for-2-bhk-flats',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <BookOpen className="text-green-600 mx-auto mb-4" size={48} />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From our Blog
          </h2>

        </div>




        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{post.date}</span>

                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <a href={post.link} target="_blank">
                    <button className="text-green-600 font-semibold hover:text-amber-700 transition-colors">
                      Read More →
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16  rounded-2xl p-8 text-center text-white">
          <a href="https://www.amenify.in/blog" target='_blank'><h3 className="text-2xl text-black font-light mb-4 underline">Show all Blog posts</h3></a>

        </div>
      </div>
    </section>
  );
};

export default Blog;
