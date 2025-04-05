import GalleryImage from '../components/gallery_image';

export default function Art()
{
  return (
    <div>
      <h1>Art (2D)</h1>
      <p>This is a subset of the art that I have made.</p>
      <p>Browse my <a href="#motion">2D animation</a>, <a href="#illustration">illustrations</a>, <a href="#painting">paintings</a>, <a href="#miscellany">miscellany</a>, and <a href="#sketches">selected sketches</a>. If you are interested in my 3D work instead, <a href="/threed">click here</a>. </p>
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
      <GalleryImage src="/images/art/chainsaw_man.webp" alt="Chainsaw Man" />
      <GalleryImage src="/images/art/girl-with-sword.webp" alt="Girl with a Sword" />
      <GalleryImage src="/images/art/headspace.webp" alt="Headspace" />
      <GalleryImage src="/images/art/nge.webp" alt="NGE" />
      <GalleryImage src="/images/art/me_mania.webp" alt="Me Mania" />
      <GalleryImage src="/images/art/pizzeria.webp" alt="Pizzeria" />
      <GalleryImage src="/images/art/your_heart.webp" alt="Your Heart" />
      <GalleryImage src="/images/art/spiderverse_5x7.webp" alt="Spiderverse" />
      <GalleryImage src="/images/art/ninrir.webp" alt="Ninrir" />
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
      <h2 id="miscellany"> <a href="#miscellany"></a> Miscellany</h2>
      <ul>
      <li>
        <p><strong><span className="color-intl-orange">Wait.gif</span></strong> Bytes / Installation <span id="year">(2024)</span></p>
        <GalleryImage src="/images/art/install_1.webp" alt="installation"/>
        <GalleryImage src="/images/art/install_2.webp" alt="installation"/>
      </li>
      </ul>
      <div className="color-grey" style={{ justifyContent: 'left' }}>
        <p>
          &quot;Wait.gif&quot; (2024) is a GIF file which is one year long.
          It was projected in a 360 degree immersive space.
          Squares appear at random locations as the GIF plays, with each existing square being perturbed as others appear.
          The dotted texture and colorful artifacts around each square are not created by the artist, but the result of
          compressing images of grey and textureless squares using the GIF file format.
        </p>
        <p>
          The GIF file format is a technical specification which was invented to allow image transmission under the constraint of
          limited bandwidth over early modems.
          It succeeded in that goal, allowing even the slowest of modems to load a moving image somewhat quickly.
          This led to its widespread adoption, and so much of the early internet&apos;s aesthetic was defined by GIFs.
          They were short, looping animations with a limited color palette, because that is inherent to the GIF file format.
          &quot;Wait.gif&quot; was created as an exploration of how the GIF technical specification, defined to satisfy now-obviated engineering constraints,
          can shape aesthetics in a contemporary setting.
        </p>
        <p>
          (aside: the GIF file format was also used for still images because of its relatively efficient compression, but its popularity
          for animated images lasted much longer. In practice they are now eclipsed by .mp4 files, even if we still call any short looping animation
          a GIF.)
        </p>
        <p>
          An alternative version of the GIF is below, with a runtime of only a few minutes.
          It is included to demonstrate more clearly the visual artifacts caused by the compression inherent to the GIF format.
        </p>
      </div>
      <GalleryImage src="/images/short_version.gif" alt="a shorter gif"/>
      <div className="color-grey" style={{ display: 'flex', justifyContent: 'left' }}>
        <p>
          Below is one of the constituent frames. The spotting and discoloration in the GIF above are a result of the GIF format.
        </p>
      </div>
      <GalleryImage src="/images/a-26.png" alt="a frame"/>
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