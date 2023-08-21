// components/VimeoVideo.tsx

type VimeoVideoProps = {
    videoId: string;
    width?: number;
    height?: number;
  };
  
  const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId, width = 640, height = 360 }) => {
    return (
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default VimeoVideo;
  