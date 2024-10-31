import Image from 'next/image';
import { Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function InstagramSection() {
  const posts = [
    { id: 1, src: '/images/instagram-posts/post1.jpg', link: 'https://www.instagram.com/cristiano/p/DBEmtTzRGGS/?img_index=1' },
    { id: 2, src: '/images/instagram-posts/post2.jpg', link: 'https://www.instagram.com/cristiano/p/DBYSriVAgYI/' },
    { id: 3, src: '/images/instagram-posts/post3.jpg', link: 'https://www.instagram.com/cristiano/p/DBhEvgqA1-V/?img_index=1' },
    { id: 4, src: '/images/instagram-posts/post4.jpg', link: 'https://www.instagram.com/cristiano/p/DBCeYXBRhZa/?img_index=1' },
  ];

  return (
    <section className="py-20 bg-text-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-12 text-center shadow-lg transform transition-all duration-300 scale-75 hover:scale-100">
          <h2 className="text-6xl font-bold">
            {" "}
            <span className="text-purple-400">
              {Array.from("Síguenos en Instagram").map((letter, index) => {
                const color = `hsl(${index * 40}, 100%, 50%)`; // Color específico para cada letra
                return (
                  <span
                    key={letter + index}
                    className="glow"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      color: color,
                      textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}`, // Brillo específico
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </h2>
          </div>
        </div>
        <div className="text-center mb-8">
          <p className="text-xl mb-4">Descubre nuestras últimas colecciones y ofertas exclusivas.</p>
          <button className="bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-full transition duration-200">
            <Instagram className="h-5 w-5 inline-block mr-2" />
            Seguir en Instagram
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-0 pb-[100%]">
                  <Image
                    src={post.src}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="rounded-lg transition-transform duration-300 hover:filter hover:contrast-125 object-cover"
                  />
                </div>
              </a>
              <div className="p-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="text-red-600 text-error">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 text-muted">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 text-muted">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-gray-500 text-sm">1.5k</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
