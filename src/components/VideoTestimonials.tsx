import { useState } from "react";
import { Play } from "lucide-react";

const VideoTestimonials = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const videoTestimonials = [
    {
      id: 1,
      
      thumbnail: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      title: "Playshoool Interior, Gururgram",
      client: "The Martinez Family",
      duration: "3:45",
      description: "See how we transformed their outdated home into a modern masterpiece.",
      videoUrl: "https://www.youtube.com/embed/2eOUNCvNBSs?si=Q_HxQbbvQfybvhOQ"
    },
    {
      
      id: 2,
      thumbnail: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      title: "3BHK Home Interior, Noida",
      client: "Jennifer & Mark",
      duration: "4:12",
      description: "A stunning kitchen makeover that became the heart of their home.",
      videoUrl: "https://www.youtube.com/embed/4HYM60kPHy0?si=MTZVvQnt2ZHjjkWo"
    },
    {
      
      id: 3,
      thumbnail: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      title: "Modular Kitchen, Gurugram",
      client: "TechCorp Solutions",
      duration: "5:20",
      description: "How we created a productive workspace that boosted team morale.",
      videoUrl: "https://www.youtube.com/embed/UcC-GU4NfHM?si=grwUqbalwungS5Tf"
    },
    {
      id: 4,
      thumbnail: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      title: "2BHK Home Interior, Gurugram",
      client: "TechCorp Solutions",
      duration: "5:20",
      description: "How we created a productive workspace that boosted team morale.",
      videoUrl: "https://www.youtube.com/embed/UcC-GU4NfHM?si=grwUqbalwungS5Tf"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear From Our Happy Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real customers, where thoughtful design meets everyday comfort.
          </p>
        </div>


        <div className="grid md:grid-cols-4 gap-8">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {playingId === video.id ? (
                <iframe
                  className="w-full aspect-video"
                  src={`${video.videoUrl}?autoplay=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setPlayingId(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-colors">
                    <button className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors group-hover:scale-110 transform duration-300">
                      <Play size={24} className="text-white ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-green-600 font-semibold text-sm mb-3">{video.client}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default VideoTestimonials;
