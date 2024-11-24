import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>John Alberse</h1>
      <p>Welcome to my website!</p>
      <p>Here, you can find my <a href="/#code">code</a>, <a href="/art">art</a>, and links to my various <a href="/#socials">outposts</a> on the World Wide Web.</p>
      <h2 id="AboutMe"><a href="#AboutMe"></a> About Me</h2>
      <p>I am a programmer and artist. I am chiefly interested in computer graphics.</p>
      <p>Professionally, I&apos;ve written a variety of software for a variety of purposes:</p>
      <ul>
        <li>I currently write 3D web code for Autodesk as a full stack developer.</li>
        <li>I am the author and maintainer of <a href="https://github.com/jalberse/shimmer">Shimmer</a>, an open source physically-based spectral rendering system in pure Rust.</li>
        <li>I created an <a href="#oceanwaves">ocean surface simulation library</a> for use in Blizzard&apos;s short films.</li>
        <li>I led technical development of interactive art installations and experimental <a href="#color-of-connection">live dance performances</a> for Texas A&M&apos;s <a href="https://pvfa.tamu.edu/research/iac/">Institute for Applied Creativity</a>, with a focus on XR.</li>
        <li>I developed GPS navigation algorithms and geographic data manipulation programs for <a href="https://www.garmin.com/en-US/">Garmin</a>&apos;s consumer devices.</li>
      </ul>
      <p className="color-grey aside">(That is mostly C++, Rust, C#, and TypeScript)</p>
      <p>Unprofessionally, I like to make art, watch college football, play Dungeons and Dragons, read and write, 
        and create fun <a href="#palettepuzzle">bits of software</a>.</p>
      <hr></hr>
      <h2 id="code"><a href="#code"></a> Code and Technology</h2>
      <p>This is a subset of the code I have written either professionally, academically, or in an occasional  fit of unrestrained productivity.</p>
      <ul>
        <li id="oceanwaves">
          <p><strong><span className="color-intl-orange">Fourier Synthesis of Ocean Waves</span>: Blizzard Entertainment</strong> (C++, Python, Houdini HDK + VEX, Katana Op API) <span id="year">(2023)</span></p>
          <p>
            Ocean surface evaluation library based on prior work by e.g. Tessendorf and Horvath 
            with integration into FX team&apos;s workflow across Houdini and Katana. Intended for use in Blizzard cinematics.
          </p>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hYRpkBWnuwM?si=To8sr23A9FSSqoZV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </span>
          <p>Created for a research and development internship with Blizzard; the above sample render is their property, posted with permission.</p>
        </li>
        <li id="shimmer">
          <p><strong><span className="color-intl-orange">Shimmer</span>: Open Source Spectral Renderering System</strong> (Rust) (<a href="https://github.com/jalberse/shimmer">GitHub</a>) <span id="year">(2023)</span> </p>
          <span id="horizontal-images">
            <Image src="/images/kroken-10k-spp.webp" alt="Kroken Render" width={420} height={420} />
            <Image src="/images/shimmer_crown.webp" alt="Crown Render" width={300} height={420} />
          </span>
          <div className="color-grey" style={{ display: 'flex', justifyContent: 'center' }}>
            <p>Renders from Shimmer. (Left) Kroken scene by Angelo Ferretti (Right) Crown scene by Martin Lubich. </p>
          </div>
          <p>Shimmer is a physically based, spectral rendering system based on the ray tracing algorithm witten in pure Rust. It is principally based on the architecture described in <a href="https://pbr-book.org/">PBRT 4th edition</a>, but it is not meant to be a 1:1 port of that project to Rust, and so may differ where desired.</p>
        </li>
        <li id="reference-rover">
          <p><strong><span className="color-intl-orange">Reference Rover</span> (Under Development) </strong> (Next.js, Rust, Tauri, Python, Tailwind) (<a href="https://github.com/jalberse/refrover">GitHub</a>) <span id="year">(2024)</span></p>
          <p>I am currently developing <a href="https://github.com/jalberse/refrover">ReferenceRover</a>, a tool for locally organizing and searching for artistic reference materials.
          It is a desktop application built using Rust and Tauri with a Next.js frontend.
          </p>
          <p>The key feature is private, local, GPU-accelerated semantic search of image data. Semantic image and text encodings are generated CLIP model running on user machines via the ONNX runtime.
          The resulting vectors are indexed and searched via the hierarchical navigable small world (HNSW) algorithm.</p>
        </li>
        <li id="ray-tracing-in-one-weekend">
          <p><strong><span className="color-intl-orange">Ray Tracing in One Weekend, in Rust</span>: Yet Another Ray Tracer (YART)</strong> (Rust) (<a href="https://github.com/jalberse/RayTracingInOneWeekendInRust">GitHub</a>) <span id="year">(2022)</span></p>
          <span id="horizontal-images">
            <Image src="/images/YART.webp" alt="YART" width={500} height={500} />
          </span>
          <p>A Rust implementation of Peter Shirley&apos;s <a href="https://raytracing.github.io/">books on ray tracing</a>, with some extensions such as parallelization via rayon and tiled rendering.
            I&apos;ve also used it to experiment with hash-based ray path prediction (<a href="http://www.arxiv.org/abs/1910.01304">HRPP</a>).
            I&apos;ve since directed my interest in light transport towards <a href="/#shimmer">Shimmer</a>.</p>
        </li>
        <li id="feriphys">
          <p><strong><span className="color-intl-orange">Feriphys</span>: Physics Simulation for Computer Graphics </strong> (Rust, wgpu) (<a href="https://github.com/jalberse/feriphys">GitHub</a>) <span id="year">(2022)</span></p>
          <p>Feriphys is a crate for physics simulations for computer graphics applications. Features include deformable meshes, cloth simulation, flocking, CPU-bound particle simulations, smoothed particle hydrodynamics, and rigid body dynamics. It is based on “Foundations of Physically Based Modelling and Animation” by Donald House and John C. Keyser, under the tutelage of the latter.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <video controls width="500">
                <source src="/media/cloth.mp4" type="video/mp4" />
              </video>
            </div>
          <p>The simulations are rendered in a custom engine built using <a href="https://wgpu.rs/">wgpu</a>.</p>
          <p>This project is pedagogical, with some known issues that I don&apos;t have plans to fix (if I return to this code, it will be for a rewrite in a new engine). For production applications, prefer an established engine like <a href="https://rapier.rs/">rapier</a>.</p>
        </li>
        <li id="heightfield">
          <p><strong><span className="color-intl-orange">PixelFluidEngine</span>: Fluid Surface Simulation via Heightfield Approximation</strong> (C++)
           (<a href="https://github.com/jalberse/HeightfieldApproximation">GitHub</a>)
           <span id="year"> (2020)</span>
          </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <video controls width="420">
                <source src="/media/iwaves.mp4" type="video/mp4" />
              </video>
            </div>
          <p>This project is an implementation of the iWaves algorithm I wrote many years ago.
            It works well on the CPU, and has a functional-but-slow CUDA implementation (which was my introduction to programming on the GPU).
            I wouldn&apos;t necessarily use this implementation in production, but it is neat enough to share.</p>
        </li>
        <li id="palettepuzzle">
          <p><strong><span className="color-intl-orange">PalettePuzzle.com</span>: Daily Color Mixing Puzzles </strong> (TypeScript, React + Next.js, HTML, CSS, PostgreSQL) 
            (<a href="https://www.palettepuzzle.com/">Website</a>, <a href="https://github.com/jalberse/palette_puzzle">GitHub</a>)
            <span id="year"> (2024)</span>
          </p>
          <p>A puzzle game similar to Wordle where the goal is to mix a target color from a palette in as few steps as possible.
            A cron job supplies new puzzles each day.
          </p>
        </li>
        <li id="color-of-connection">
          <p><strong><span className="color-intl-orange">Color of Connection</span>: Immersive Live Dance Performance Tech </strong> (TouchDesigner, Python, GLSL) <span id="year">(2023)</span></p>
          <p>&quot;The Color of Connection&quot; was a performance done in collaboration with dance faculty at Texas A&M. The project explores choreography in an immersive 360 environment from <a href="https://www.igloovision.com/">Igloo Vision</a>. Pairs of dancers interact with each other and their digital counterparts across tangible and virtual space.</p>
          <p>I was responsible for all technical aspects of the production. Dancer motion was captured using a pair of Kinects, from which optical flow was calculated and used to drive a fluid simulation written in GLSL based on the <a href="https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu">stable fluids model</a>. This fluid simulation was then displayed via the Igloo system to complement the dance performance.</p>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kew3jqWAJ44?si=2cUYtmZEHCVe7J1_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="color-grey" style={{ display: 'flex', justifyContent: 'center' }}>
            <p>(This is a 360 interactive video, scroll around!)</p>
          </div>
        </li>
        <li>
          <p><strong><span className="color-intl-orange">360 Pedagogy</span>: Interactive Narrative in Immersive 360 Environments for Education</strong> (Unity, C#, Igloo Core Engine) <span id="year"> (2023)</span></p>
          <span id="horizontal-images">
            <Image src="/images/360-pedagogy.webp" alt="360 Pedagogy" width={600} height={320} />
          </span>
          <p>In collaboration with Dr. Hwaryoung Seo and Michael Bruner, created a Unity-based system for building interactive narrative projects for a 360 degree environment. Users can interact with a 360-degree screen using a bespoke point-and-click system using VIVE controllers, and student developers can use our scaffolding to build arbitrary narrative graphs for 360 videos with triggers for arbitrary effects and interactions. Students at Texas A&M used this system in the “Immersive Virtual Environments” course in 2023 to create narrative works around a theme of accessibility. A paper on the project and associated pedagogy was accepted to <a href="https://www.isea-international.org/">ISEA 2024</a>.</p>
        </li>
      </ul>
      <hr></hr>
      <h2 id="socials"><a href="#socials"></a> Outposts</h2>
      <ul>
        <li>LinkedIn: <a href="https://linkedin.com/in/john-alberse">John Alberse</a></li>
        <li>GitHub: <a href="https://github.com/jalberse">jalberse</a></li>
        <li>Twitter: <a href="https://x.com/JohnAlberseArt">@johnalberseart</a></li>
        <li>Instagram: <a href="https://www.instagram.com/johnalberseart/">@johnalberseart</a></li>
      </ul>
      <h2 id="contact"><a href="#contact"></a> Contact</h2>
      <ul>
        <li>Email: alberse.john (AT) gmail (DOT) com</li>
        <li>Resume and telephone available by request.</li>
      </ul>
    </div>
  );
}
