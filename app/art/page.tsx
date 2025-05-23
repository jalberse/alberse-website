import GalleryImage from '../components/gallery_image';

export default function Art()
{
  return (
    <div>
      <h1>Art (2D)</h1>
      <p>This is a subset of the art that I have made.</p>
      <p>Browse my <a href="#motion">2D animation</a>, <a href="#illustration">illustrations</a>, <a href="#painting">paintings</a>, and <a href="#sketches">selected sketches</a>. If you are interested in my 3D work instead, <a href="/threed">click here</a>. </p>
      <h2 id="motion"> <a href="#motion"></a> Animation and Motion</h2>
      <div style={{ display: 'flex', justifyContent: 'center'}}>  
        <iframe width="100%" height="360" src="https://www.youtube.com/embed/IMeVnKLjI54?si=khgUfNdEKjBv1Ipm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="color-grey" style={{ display: 'flex', justifyContent: 'center' }}>
        <p>&quot;The Line&quot; is a short film I made in collaboration with choreographer and dancer Hannah LeComte and musician Sydney Legee. (2017)</p>
      </div>
      <h2 id="illustration"> <a href="#illustration"></a> Illustration</h2>
      <GalleryImage src="/images/art/cafe.webp" alt="Cafe" />
      <GalleryImage src="/images/art/Kiki-small.webp" alt="Kiki"></GalleryImage>
      <GalleryImage src="/images/art/perfect_blue.webp" alt="Perfect Blue" />
      <GalleryImage src="/images/art/attic.webp" alt="Attic" />
      <GalleryImage src="/images/art/portside.webp" alt="Portside" />
      <GalleryImage src="/images/art/hair-sword.webp" alt="Hair Sword" />
      <GalleryImage src="/images/art/girl-with-sword.webp" alt="Girl with a Sword" />
      <GalleryImage src="/images/art/headspace.webp" alt="Headspace" />
      <GalleryImage src="/images/art/nge.webp" alt="NGE" />
      <GalleryImage src="/images/art/me_mania.webp" alt="Me Mania" />
      <GalleryImage src="/images/art/pizzeria.webp" alt="Pizzeria" />
      <GalleryImage src="/images/art/your_heart.webp" alt="Your Heart" />
      <GalleryImage src="/images/art/spiderverse_5x7.webp" alt="Spiderverse" />
      <GalleryImage src="/images/art/lnr.webp" alt="LNR" />
      <GalleryImage src="/images/art/charon.webp" alt="Charon" />
      <h2 id="painting"> <a href="#painting"></a> Painting</h2>
      <GalleryImage src="/images/art/BlueSkyRuins.webp" alt="Blue Sky Ruins" />
      <GalleryImage src="/images/art/hallway.webp" alt="Hallway, after Mr. P Explores photography" />
      <GalleryImage src="/images/art/meds-map-study-08.webp" alt="Study" />
      <GalleryImage src="/images/art/jester.webp" alt="Jester" />
      <GalleryImage src="/images/art/black-company.webp" alt="Black Company" />
      <GalleryImage src="/images/art/skull_material_study.webp" alt="Skull Material Study" />
      <GalleryImage src="/images/art/portrait-stripes.webp" alt="Stripes" />
      <GalleryImage src="/images/art/portrait-headdress.webp" alt="headdress" />
      <GalleryImage src="/images/art/venice_orange.webp" alt="venice"></GalleryImage>
      <h2 id="sketches"> <a href="#sketches"></a> Sketches</h2>
      <GalleryImage src="/images/art/lady-knight-sketch.webp" alt="Lady Knight" />
      <GalleryImage src="/images/art/portrait-pencil-orla.webp" alt="Orla" />
      <GalleryImage src="/images/art/portrait-pencil-2.webp" alt="Foreman" />
      <GalleryImage src="/images/art/portrait-pencil-3.webp" alt="McGee" />
      <GalleryImage src="/images/art/portrait-pencil-4.webp" alt="Turner" />
      <GalleryImage src="/images/art/timebomb.webp" alt="Timebomb" />
      <GalleryImage src="/images/art/coolGuy.webp" alt="Cool Guy" />
      <GalleryImage src="/images/art/study_sword_lady.webp" alt="Sword Lady" />
      <GalleryImage src="/images/art/mech-spider-quad.webp" alt="Mech" />
    </div>
  );
}