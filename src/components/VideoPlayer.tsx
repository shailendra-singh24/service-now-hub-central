
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <iframe 
        src={videoUrl}
        className="w-full h-full"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
