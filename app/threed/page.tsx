import GalleryImage from '../components/gallery_image';
import Image from 'next/image';

export default function Threed()
{
  return (
    <div>
      <h1>3D</h1>
      <h2 id="look-dev"> <a href="#look-dev"></a> Look Development</h2>
      <p>Unless otherwise stated, I am responsible only for the materials for each of these projects (not modelling).</p>    
      <ul>
      <li>
          <p><strong><span className="color-intl-orange">Workshop</span></strong>: Still Life (Materials, Layout, Lighting) <span id="year">(2023)</span></p>
        <GalleryImage src="/media/look_dev/a7_render_1.webp" alt="Workshop"/>
        <span id="horizontal-images">
          <Image src="/media/look_dev/a7_render_3.webp" alt="models" width={360} height={360} />
          <Image src="/media/look_dev/a7_render_2.webp" alt="Flat Lighting" width={360} height={360} />
        </span>
        <GalleryImage src="/media/look_dev/turp_render.webp" alt="Turpentine" />
        <div id="horizontal-images">
          <Image src="/media/look_dev/turp_BaseColor.webp" alt="Base Color" width={300} height={330} />
          <Image src="/media/look_dev/turp_roughness.webp" alt="Roughness" width={300} height={330} />
          <Image src="/media/look_dev/turp_metallic.webp" alt="Metallic" width={300} height={330} />
          <Image src="/media/look_dev/turp_combined.webp" alt="Normals" width={300} height={330} />
        </div>
        </li>
        <li>
          <p><strong><span className="color-intl-orange">Backpack</span></strong> Fabrics Study <span id="year"> (2023)</span> </p>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="750" height="420" src="https://www.youtube.com/embed/XO4bm27GQR0?si=rtF-gITpLjpgB0c0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </span>
          <div id="horizontal-images">
            <GalleryImage src="/media/look_dev/a5_render1.webp" alt="Backpack 1" />
            <GalleryImage src="/media/look_dev/a5_render2.webp" alt="Backpack 2" />
          </div>
        </li>
        <li>
          <p><strong><span className="color-intl-orange">Teapots</span></strong>: Basic Material Studies <span id="year">(2023)</span></p>
          <GalleryImage src="/media/look_dev/a2_render1.webp" alt="Teapot 1" />
          <GalleryImage src="/media/look_dev/a2_render2.webp" alt="Teapot 2" />
          <GalleryImage src="/media/look_dev/a2_render3.webp" alt="Teapot 3" />
          <GalleryImage src="/media/look_dev/a2_render4.webp" alt="Teapot 4" />
        </li>
      </ul>
    </div>
  );
}