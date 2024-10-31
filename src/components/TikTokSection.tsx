import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { AiFillTikTok } from 'react-icons/ai';

interface TikTokVideoProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
}

const TikTokVideo: React.FC<TikTokVideoProps> = ({ videoId, thumbnailUrl, title }) => {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const current = videoRef.current;
    if (current) {
      current.style.backgroundImage = `url(${thumbnailUrl})`;
    }
  }, [thumbnailUrl]);

  const activateVideo = () => {
    setIsActive(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      activateVideo();
    }
  };

  useEffect(() => {
    if (isActive) {
      const current = videoRef.current;
      if (current) {
        current.style.backgroundImage = 'unset';
        const playButton = current.querySelector(`#Id${videoId}`);
        if (playButton) {
          playButton.remove();
        }

        const iframeEl = createIframe();
        current.appendChild(iframeEl);
        iframeEl.focus();
        iframeRef.current = iframeEl;

        unMutePlayerByDefault();
      }
    }
  }, [isActive, videoId]);

  const createIframe = () => {
    const iframeEl = document.createElement('iframe');
    iframeEl.width = '320';
    iframeEl.height = '570';
    iframeEl.classList.add('rounded-2xl', 'w-full', 'h-full', 'snap-center');
    iframeEl.title = title;
    iframeEl.allow =
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; transparency';
    iframeEl.allowFullscreen = true;
    iframeEl.src = `https://www.tiktok.com/player/v1/${videoId}?autoplay=1`;

    return iframeEl;
  };

  const unMutePlayerByDefault = () => {
    const messageHandler = (event: MessageEvent) => {
      if (
        event.origin === 'https://www.tiktok.com' &&
        event.data.type === 'onPlayerReady'
      ) {
        iframeRef.current?.contentWindow?.postMessage(
          { type: 'unMute', 'x-tiktok-player': true },
          '*'
        );

        window.removeEventListener('message', messageHandler);
      }
    };

    window.addEventListener('message', messageHandler);
  };

  return (
    <div
      ref={videoRef}
      className="rounded-[16px] h-[570px] w-80 snap-center bg-black relative shrink-0 cursor-pointer bg-center bg-[length:100%] hover:bg-[length:105%] transition-[background-size]"
      onClick={activateVideo}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label="Reproducir video"
      data-title={title}
    >
      {!isActive && (
        <div
          className="p-4 pl-[18px] color-red rounded-full absolute bottom-6 right-6 hover:scale-110 transition-transform duration-300"
          id={`Id${videoId}`}
          title={title}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 color-red"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

// Modificación para TikTokSection
const TikTokSection = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  const videos = [
    {
      videoId: '7404168224792759558',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
      title: 'TikTok Video 1',
    },
    {
      videoId: '7220414993081175323',
      thumbnailUrl: 'https://p16-sign-useast2a.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/b50bdd9b7e184b089ac38bf340a8fde5_1681133884?lk3s=81f88b70&x-expires=1730350800&x-signature=z3BoQo%2BVshwFBXUQFTPiNht61g4%3D&shp=81f88b70&shcp=-',
      title: 'TikTok Video 2',
    },
    {
      videoId: '6943219896050355462',
      thumbnailUrl: 'https://example.com/thumbnail3.jpg',
      title: 'TikTok Video 3',
    },
  ];

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <h2 className="text-3xl font-bold mb-4 flex items-center">
      <span>Nuestros TikToks</span>
        <span className= "ml-2">
          <AiFillTikTok className="h-10 w-auto text-black-600" />
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video) => (
          <TikTokVideo
            key={video.videoId}
            videoId={video.videoId}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
          />
        ))}
      </div>
    </div>
  );
});

export default TikTokSection;
