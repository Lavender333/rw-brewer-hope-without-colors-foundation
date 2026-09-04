import Link from "next/link";

export const metadata = {
  title: "Founder’s Message",
  description: "A message from Carol E. Brewer, founder of the R.W. Brewer Jr. Hope Without Color Foundation.",
};

export default function Page() {
  return <main id="main" className="story-page">
    <header className="story-hero founder-story-hero">
      <div className="story-hero-inner">
        <p className="eyebrow">A promise carried forward</p>
        <h1>Founder’s Message</h1>
        <p>Carol E. Brewer, Founder<br />R.W. Brewer Jr. Hope Without Color Foundation</p>
      </div>
    </header>

    <article className="story-article founder-letter">
      <p className="story-opening">As the wife of R W Brewer Jr., I had the privilege of witnessing his purpose, his compassion, and his unwavering belief in people every single day. He lived his life with a simple but powerful mission: hope through action. He didn’t just talk about change he created it. He didn’t just encourage young men he lifted them. He didn’t just stand against injustice he stood with those who had no one else standing beside them.</p>
      <p>R W Brewer Jr. believed that hope meant nothing unless it moved. Unless it worked. Unless it reached into someone’s life and made it better. His impact was not measured in speeches or titles, but in the countless young men who found direction, confidence, and purpose because he cared enough to act.</p>
      <p>He also believed deeply that better men make better husbands, and better husbands make better families. That belief shaped the way he mentored young men, the way he supported fathers, and the way he strengthened homes. For him, building stronger communities always began with building stronger men.</p>
      <blockquote>“Hope is a renewable resource for children, and it must be constantly renewed.”</blockquote>
      <p>And he believed in something even more profound: hope is a renewable resource for children, and it must be constantly renewed. He understood that every child needs fresh encouragement, fresh opportunity, and fresh belief poured into them again and again. Hope, in his eyes, was not a one-time gift, it was a lifelong investment.</p>
      <p>After his passing, I knew his mission could not end. His work was too important, his influence too deep, and his heart too generous to let it fade. That is why I created the R W Brewer Jr. Hope Without Color Foundation to ensure that the hope he carried, the hope he gave, and the hope he lived continue for generations.</p>
      <p>This foundation is more than an organization. It is a promise. A promise that his legacy will not be forgotten. A promise that his belief in young men will continue. A promise that his fight for fairness, dignity, and opportunity will live on. A promise that hope through action will remain in our guiding light.</p>
      <p>Every program we build, every young man we support, every family we strengthen, and every barrier we challenge is done in his name. We move with purpose because he moved with purpose. We served with compassion because he served with compassion. We act because he taught us that hope must always be active.</p>
      <p>It is my honor to carry forward his mission. It is my responsibility to protect his legacy. And it is my deepest commitment to ensure that the world continues to feel the impact of R W Brewer Jr. a man whose hope changed lives, and whose action changed communities.</p>
      <p className="story-closing">Hope through action. That is his mission. And through this foundation, it will continue.</p>
      <footer className="story-signature"><strong>Carol E. Brewer</strong><span>Founder, R W Brewer Jr. Hope Without Color Foundation</span></footer>
    </article>

    <nav className="story-next" aria-label="Continue reading">
      <span>Continue the story</span>
      <Link href="/biography">Read R.W. Brewer Jr.’s Biography <span aria-hidden="true">→</span></Link>
    </nav>
  </main>;
}
