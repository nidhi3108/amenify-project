import  { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Eye, ArrowUpRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project1 from '../images/recent-project1.gif';
import Project2 from '../images/project2.gif';
import Project3 from '../images/project3.jpg';
import Project4 from '../images/project4.gif';
import Project5 from '../images/project5.jpg';


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:shadow-lg z-10"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:shadow-lg z-10"
  >
    <ChevronRight size={20} />
  </button>
);

const ProjectCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const update = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      if (w <= 640) {
        setSlidesToShow(1);
        setShowArrows(false);
      } else if (w <= 1024) {
        setSlidesToShow(2); 
        setShowArrows(true);
      } else {
        setSlidesToShow(4); 
        setShowArrows(true);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const projects = [
    {
      id: 1,
      title: '𝟯 𝗕𝗛𝗞 𝗧𝗿𝗮𝗻𝗾𝘂𝗶𝗹 𝗟𝘂𝘅𝘂𝗿𝘆 𝗙𝗼𝗿 𝗧𝗼𝗱𝗮𝘆’𝘀 𝗙𝗮𝗺𝗶𝗹𝗶𝗲𝘀',
      category: 'Residential',
      media: Project1,
      description:
        'A harmonious blend of calm interiors and high-end finishes for family life.',
      link: 'https://amenify.app/view_vr?id=3FO3NYATHC4W',
    },
    {
      id: 2,
      title: '𝗢𝗳𝗳𝗶𝗰𝗲 𝗜𝗻𝘁𝗲𝗿𝗶𝗼𝗿, 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹 𝗣𝗼𝗱 𝗼𝗳 𝗙𝗼𝗰𝘂𝘀 𝗮𝗻𝗱 𝗙𝗹𝗼𝘄',
      category: 'Residential',
      media: Project5,
      description:
        'Compact yet inspiring, this space is designed to boost creativity.',
      link: 'https://amenify.app/view_vr?id=3FO3MFDW8MNQ',
    },
    {
      id: 3,
      title: '𝟮 𝗕𝗛𝗞 𝗠𝗶𝗻𝗶𝗺𝗮𝗹 𝗠𝗮𝗿𝘃𝗲𝗹 𝗼𝗳 𝗖𝗼𝘇𝗶𝗻𝗲𝘀𝘀 an 𝗘𝗹𝗲𝗴𝗮𝗻𝗰𝗲',
      category: 'Commercial',
      media: Project3,
      description:
        'A thoughtfully crafted space that radiates simplicity for modern living.',
      link: 'https://amenify.app/view_vr?id=3FO3MFDW8MNQ',
    },
    {
      id: 4,
      title: '𝟯 𝗕𝗛𝗞 𝗦𝗲𝗿𝗲𝗻𝗲 𝗘𝘀𝗰𝗮𝗽𝗲 𝘄𝗶𝘁𝗵 𝗘𝗹𝗲𝗴𝗮𝗻𝗰𝗲',
      category: 'Kitchen',
      media: Project4,
      description:
        'Spacious and elegant, this home offers a refined setting for family comfort.',
      link: 'https://amenify.app/view_vr?id=3FO3MFDW8MNQ',
    },
    {
      id: 5,
      title: '𝟮 𝗕𝗛𝗞 𝗛𝗮𝘃𝗲𝗻 𝗼𝗳 𝗖𝗼𝗺𝗳𝗼𝗿𝘁 and 𝗖𝗵𝗮𝗿𝗺',
      category: 'Commercial',
      media: Project2,
      description:
        'Designed with comfort and charm, this cozy retreat is perfect for small families.',
      link: 'https://amenify.app/view_vr?id=3FO3MFDW8MNQ',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: showArrows,
    swipeToSlide: true,
    draggable: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest interior design transformations that showcase
            our expertise and attention to detail.
          </p>
        </div>

        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative group">
                  {project.media.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                      src={project.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <img
                      src={project.media}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center">
                      <Eye size={18} className="mr-2" />
                      View Gallery
                    </button>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <span className="text-green-600 text-sm font-semibold mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button className="flex items-center text-green-600 mt-2 text-sm font-semibold">
                        View Project 3D VR
                        <ArrowUpRight size={16} className="ml-1" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <VideoShowcase/>
      </div>
    </section>
  );
};

export default ProjectCarousel;


export const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: 'Luxury Home Tour',

      youtubeUrl:
        'https://www.youtube.com/embed/vSr2bLkyVeo?si=RK5gE4ST9y7cT5m2',
      description: 'A walkthrough of our latest luxury home renovation.',
    },
    {
      id: 2,
      title: 'Modern Office Transformation',

      youtubeUrl:
        'https://www.youtube.com/embed/PV9xdmQBRCc?si=uKXa8PCrfIONdZuJ',
      description: 'Take a look inside our contemporary office project.',
    },
    {
      id: 3,
      title: 'Cozy Kitchen Remodel',

      youtubeUrl:
        'https://www.youtube.com/embed/V_ZgETneGZk?si=Br_guKmXMR4VANeB',
      description: 'Watch the journey of turning a kitchen into a dream space.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Walk throughs
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="w-full h-56 relative">
                <iframe
                  src={video.youtubeUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <span className="text-green-600 text-sm font-semibold mb-1 block">
                  {video.category}
                </span>
                <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
