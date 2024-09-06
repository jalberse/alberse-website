import Image from 'next/image';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}

export default GalleryImage;