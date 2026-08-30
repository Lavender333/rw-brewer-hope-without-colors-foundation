import Link from "next/link";

export const metadata = {
  title: "The Dedication Plaque",
  description: "Honoring the life, character, family, leadership, and enduring legacy of R.W. Brewer Jr.",
};

const values = [
  { label: "Character", note: "Integrity in every choice", image: "/legacy-character.jpg", alt: "A hand signing a commitment with care" },
  { label: "Leadership", note: "Guidance that lifts others", image: "/legacy-leadership.jpg", alt: "A team gathered in thoughtful collaboration" },
  { label: "Family", note: "Love across generations", image: "/legacy-family.jpg", alt: "Children gathered together in community" },
  { label: "Community", note: "Service with purpose", image: "/legacy-community.jpg", alt: "A volunteer serving at a community event" },
  { label: "Boating", note: "Peace found on the water", image: "/legacy-boating.jpg", alt: "A sailboat resting on golden water at sunset" },
  { label: "Bowling", note: "Joy shared on the lanes", image: "/legacy-bowling.jpg", alt: "Bowling pins and a ball ready on the lane" },
  { label: "Music", note: "Rhythm, soul, and memory", image: "/legacy-music.jpg", alt: "Hands playing an acoustic guitar in warm light" },
];

export default function Page() {
  return <main id="main" className="dedication">
    <section className="dedication-heading">
      <p className="eyebrow">INTEGRITAS • HONOR • FAMILIA</p>
      <h1>The Dedication Plaque</h1>
      <p>Honoring a life of integrity, honor, family, and enduring legacy.</p>
      <p className="family-roles">Brother <span>•</span> Husband <span>•</span> Father <span>•</span> Grandfather <span>•</span> Great-Grandfather</p>
    </section>

    <section className="dedication-main">
      <figure className="plaque-stage">
        <div className="plaque-display">
          <img src="/rw-brewer-dedication-plaque.png" alt="A handcrafted walnut and aged-bronze memorial plaque honoring R.W. Brewer Jr., with engraved words about his character, family, leadership, mentorship, and love of boating, bowling, and music" />
        </div>
        <figcaption>R.W. Brewer Jr. <span aria-hidden="true">•</span> Enduring Legacy</figcaption>
      </figure>

      <article className="dedication-copy">
        <p className="eyebrow">His enduring legacy</p>
        <h2>A Life That Built<br />Stronger Foundations</h2>
        <div className="gold-rule" />
        <p>This plaque honors R.W. Brewer Jr.—a man of unwavering integrity and boundless commitment to those he loved and served.</p>
        <p>He was a beloved brother, devoted husband, guiding father, proud grandfather and great-grandfather, principled leader, and trusted mentor whose wisdom and example lifted generations, families, and communities.</p>
        <p>His highest priority was character. His greatest joy came from time on the water, strikes on the lanes, and the music that moved his soul.</p>
        <p>This tribute reminds us that legacies are measured in the lives we influence and the values we pass on. His legacy lives on in all who continue the work of hope, service, and unity.</p>
        <blockquote className="dedication-quote">“A life of integrity becomes a legacy of hope.”</blockquote>
      </article>
    </section>

    <section className="legacy-gallery" aria-labelledby="legacy-gallery-title">
      <div className="legacy-gallery-heading">
        <p className="eyebrow">The values he lived</p>
        <h2 id="legacy-gallery-title">Seven Reflections of a Life Well Lived</h2>
        <p>Each image preserves a part of the example R.W. Brewer Jr. leaves with his family and community.</p>
      </div>
      <div className="dedication-values">
        {values.map(({ label, note, image, alt }) => <figure key={label} className="legacy-value-card">
          <img src={image} alt={alt} loading="lazy" />
          <figcaption><strong>{label}</strong><span>{note}</span></figcaption>
        </figure>)}
      </div>
    </section>

    <section className="legacy-forward">
      <div className="legacy-still-life" role="img" aria-label="A peaceful golden lakeside scene representing reflection and legacy" />
      <div>
        <p className="eyebrow">A legacy in motion</p>
        <h2>Help Carry This Legacy Forward</h2>
        <p>Your support helps the R.W. Brewer Jr. Hope Without Color Foundation continue building nutrition, education, mentorship, wellness, and opportunities that create real change.</p>
        <div className="actions">
          <Link className="button gold" href="/get-involved#donate">Support the mission</Link>
          <Link className="button outline" href="/about">About the foundation</Link>
        </div>
        <em>Together, we can honor his legacy by building a brighter future for generations to come.</em>
      </div>
    </section>
  </main>;
}
