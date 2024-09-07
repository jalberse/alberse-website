import Image from 'next/image';

interface GalleryImageProps {
  src: string;
  alt: string;
  caption?: string; // Add optional caption property
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, caption }) => {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default GalleryImage;