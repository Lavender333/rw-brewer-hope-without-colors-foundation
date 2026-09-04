import Link from "next/link";

export const metadata = {
  title: "Biography of R.W. Brewer Jr.",
  description: "The life, service, advocacy, and enduring legacy of R.W. Brewer Jr.",
};

export default function Page() {
  return <main id="main" className="story-page">
    <header className="story-hero biography-story-hero">
      <div className="story-hero-inner">
        <p className="eyebrow">His life and legacy</p>
        <h1>Biography of<br />R.W. Brewer Jr.</h1>
        <p>Southern roots. Detroit strength. A lifetime of hope through action.</p>
      </div>
    </header>

    <article className="story-article biography-copy">
      <p className="story-opening">R W Brewer Jr. was born in Georgia, where he inherited the warmth, humility, and grounded strength of the South. At a young age, he moved to Detroit, a city whose rhythm, resilience, and Motown spirit shaped his identity and sharpened his purpose. The blend of Southern roots and Detroit grit gave him a rare dual strength: gentle wisdom paired with unshakeable determination.</p>
      <p>Growing up in Detroit, he absorbed the city’s message that greatness lives in everyday people and that community thrives when individuals invest in one another. This belief guided his life’s mission. He understood the challenges facing young men in the community especially those who felt unseen, underestimated, or pushed aside and he made it his calling to lift them up. Through mentorship, guidance, and genuine care, he changed the lives of countless young men and women. He had a rare gift: the ability to see greatness in people long before they saw it in themselves. His words carried weight, his presence brought calm, and his belief in others sparked transformation.</p>
      <p>His advocacy extended beyond mentorship. After losing his sister to cancer, R W Brewer Jr. devoted himself to supporting women’s health and amplifying women’s voices. He became a champion for women in music and athletics, believing their strength, creativity, and resilience deserved recognition and protection. For him, honoring the women he lost meant empowering the women still here. He fought fiercely for those facing discrimination or disenfranchisement, standing with people who had no one else standing beside them. His advocacy was never about recognition it was about justice and opportunity.</p>
      <blockquote>“Hope means nothing unless it moves. Hope must lift, build, protect, and change lives.”</blockquote>
      <p>As a husband and family man, he led with love, humor, and quiet strength. His home was a place of wisdom, warmth, and welcome. He believed deeply that making better men would create better husbands, and better husbands would build stronger families. That belief guided everything he did from the way he mentored young men to the way he nurtured his own home.</p>
      <p>His mission was simple and powerful: hope means nothing unless it moves. Hope must lift, build, protect, and change lives. Every day, he lived that belief.</p>
      <p>To ensure his passion for helping others never fades, the R W Brewer Jr. Hope Without Color Foundation was created. The foundation stands as a living extension of his heart and promises that his commitment to hope, opportunity, justice, and human dignity will continue for generations. It carries forward his devotion to mentorship, women’s health advocacy, community empowerment, and amplifying voices that deserve to be heard.</p>
      <p className="story-closing">R W Brewer Jr.’s life remains a testament to courage, compassion, and unwavering integrity. His legacy is not only remembered it continues to move.</p>
    </article>

    <nav className="story-next" aria-label="Continue reading">
      <span>In her own words</span>
      <Link href="/founders-message">Read the Founder’s Message <span aria-hidden="true">→</span></Link>
    </nav>
  </main>;
}
