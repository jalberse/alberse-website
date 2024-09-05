export default function Home() {
  // TODO Hmm, just borrow Eliza's SASS/CSS and edit it as I want it.
  //      Include MIT license and credit on the website + readme re: markdown styling
  // TODO Page with acknolwedgements and licenses for all the stuff I'm using, chiefly Eliza's stuff
  //      for most of the css styling.

  // TODO Ensure that links from squarespace still work and go to reasonable places.
  //      Especially johnalberse.com/code (which can probably just redirect to the homepage?)
  // https://nextjs.org/docs/app/building-your-application/routing/redirecting#redirects-in-nextconfigjs
  //   Do this - define the routes, then route back to the actual route on here (or if they collide, just
  //   implement the path.) I think we at least need to redirect /code since that will just be on our main page now.

  // TODO Change the favicon.

  // TODO Change the color scheme up.

  return (
    <div>
      <h1>John Alberse</h1>
      <p>Welcome to my website!</p>
      <p>Here, you can find my <a href="#code">code</a>, <a href="/">art</a>, and links to my various <a href="#socials">outposts</a> on the world wide web.</p>
      <h2 id="AboutMe">
        <a href="#AboutMe"></a>
        About Me
      </h2>
      {/* TODO: Add brief description with links to various parts of the site. */}
      <p>I am a programmer and artist. My experience is chiefly in C++, Rust, and C#, but I can solve problems using just about anything approaching a turing machine.</p>
      <p>Professionally, I&apos;ve written a variety of software for a variety of purposes:</p>
      <ul>
        <li>I am the author and maintainer of <a href="https://github.com/jalberse/shimmer">Shimmer</a>, an open source physically-based spectral rendering system in pure Rust.</li>
        <li>I created an <a href="#oceanwaves">ocean surface simulation library</a> for use in Blizzard&apos;s short films.</li>
        {/* TODO: Link these down to "Code" where I'll have info about AR/XR/VR, Unity, etc */}
        <li>I lead technical development of interactive art installations and live dance performances for Texas A&M&apos;s
          <a href="https://pvfa.tamu.edu/research/iac/"> Institute for Applied Creativity</a>.</li>
        <li>I developed GPS navigation algorithms and geographic data manipulation programs for <a href="https://www.garmin.com/en-US/">Garmin</a>&apos;s consumer devices.</li>
      </ul>
      <p>Unprofessionally, I like to make art, play Dungeons and Dragons, read and write genre fiction, 
        and create fun bits of software.</p>
      <h2 id="code">
        <a href="#code"></a>
        Code and Technology
      </h2>
      {/* TODO: Add the coding projects */}
      <p>This is a subset of the code I have written either professionally, academically, or in an occasional  fit of unrestrained productivity.</p>
      <ul>
        <li id="oceanwaves">
          <p><strong>Fourier Synthesis of Ocean Waves | Blizzard Entertainment</strong> (C++, Python, Houdini HDK + VEX, Katana Op API)</p>
          <p>
            Ocean surface evaluation library based on prior work by e.g. Tessendorf and Horvath 
            with integration into FX team&apos;s workflow across Houdini and Katana. Intended for use in Blizzard cinematics.
          </p>
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            {/* https://stackoverflow.com/questions/46635316/youtube-embedded-video-auto-loop-without-refresh-screen
            Consider doing the above to avoid the black flash before looping. */}
            <iframe 
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hYRpkBWnuwM?autoplay=1&loop=1&playlist=hYRpkBWnuwM"
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              frameBorder={0}
              >
            </iframe>
          </span>
          <p>Created for a research and development internship with Blizzard; the above sample render is their property, posted with permission.</p>
        </li>
        <li id="shimmer">
          <p><strong>Shimmer : Open Source Spectral Renderering System</strong> (Rust) (<a href="https://github.com/jalberse/shimmer">GitHub</a>)</p>
          <p>Details</p>
        </li>
      </ul>
      <h2 id="socials">
        <a href="#socials"></a>
        Outposts
      </h2>
      <ul>
        <li>Twitter: <a href="https://x.com/JohnAlberseArt">@johnalberseart</a></li>
      </ul>
      <h2 id="contact">
        <a href="#contact"></a>
        Contact
      </h2>
      {/* TODO: Add alberse.john (AT) gmail (DOT) com */}
      <ul>
        <li>Email: alberse.john (AT) gmail (DOT) com</li>
        <li>Resume and telephone available by request.</li>
      </ul>
    </div>
  );
}
