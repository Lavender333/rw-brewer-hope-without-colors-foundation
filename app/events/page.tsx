import Link from "next/link";

export const metadata={title:"Upcoming Events",description:"Upcoming community events from the R.W. Brewer Jr. Hope Without Color Foundation."};

const formAction="https://formsubmit.co/antoinettewilliams@thetruelavender.online";
const thankYou="https://lavender333.github.io/rw-brewer-hope-without-colors-foundation/thank-you";

export default function Page(){return <main id="main">
  <section className="page-hero events-hero"><p className="eyebrow">Gather · Learn · Grow</p><h1>Upcoming events</h1><p>Community-centered opportunities to connect, learn, serve, and move forward together.</p></section>
  <section className="events-section">
    <div className="events-heading"><div><p className="eyebrow">Save the date</p><h2>What’s happening next</h2></div><Link className="button outline" href="/contact">Ask about an event</Link></div>
    <article className="event-placeholder"><span className="event-date"><b>Coming</b><small>Soon</small></span><div><p className="eyebrow">New dates in preparation</p><h3>Community events will be announced here.</h3><p>We are coordinating upcoming nutrition, education, wellness, volunteer, and community-learning opportunities. Check back for confirmed dates and registration details.</p></div></article>
  </section>
  <section className="event-owner-panel">
    <div><p className="eyebrow">Foundation owners</p><h2>Submit an event update</h2><p>Send a new event, correction, or event image securely to the foundation inbox for review and publication. The owner access code is never stored in the public website.</p></div>
    <form action={formAction} method="POST" encType="multipart/form-data">
      <input type="hidden" name="_subject" value="Owner Event Update — Hope Without Color Foundation"/>
      <input type="hidden" name="_cc" value="ken.brewer@frg4.com,ken.brewer@infoaera.com"/>
      <input type="hidden" name="_next" value={thankYou}/>
      <input type="hidden" name="_template" value="table"/>
      <input type="text" name="_honey" className="honey" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
      <label>Owner Access Code<input required type="password" name="owner_access_code" autoComplete="current-password"/></label>
      <label>Event Title<input required name="event_title"/></label>
      <div className="form-row"><label>Date<input required type="date" name="event_date"/></label><label>Time<input type="time" name="event_time"/></label></div>
      <label>Location<input required name="location"/></label>
      <label>Event Details<textarea required name="event_details" rows={5}/></label>
      <label>Event Image <span>(JPG or PNG, maximum total upload 10 MB)</span><input type="file" name="event_image" accept="image/png,image/jpeg"/></label>
      <button className="button gold" type="submit">Send event update</button>
      <p className="form-note">For security, submissions are reviewed before they appear publicly.</p>
    </form>
  </section>
</main>}
