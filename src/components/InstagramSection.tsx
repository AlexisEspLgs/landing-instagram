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
        <h2 className="text-3xl font-bold bg-primary text-center mb-12">Síguenos en Instagram</h2>
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
                <div className="relative w-full h-0 pb-[100%]"> {/* Mantener aspecto cuadrado */}
                  <Image
                    src={post.src}
                    alt={`Instagram post ${post.id}`}
                    fill // Cambiado de layout="fill" a fill
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
                <span className="text-gray-500 text-sm">1.5k</span> {/* Ejemplo de likes */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
