import { useState } from 'react';
import useReveal from '../useReveal';

export default function QuoteForm() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', phone: '', from: '', to: '', date: '', details: '' });

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    const lines = [
      'Hi BCP Man And Small Van, I\'d like a free quote.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ];
    if (form.from) lines.push(`Collection postcode: ${form.from}`);
    if (form.to) lines.push(`Delivery postcode: ${form.to}`);
    if (form.date) lines.push(`Preferred date: ${form.date}`);
    if (form.details) lines.push(`What needs moving: ${form.details}`);
    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/447922227398?text=${message}`, '_blank', 'noopener');
  };

  return (
    <section className="section quote section-alt" id="quote">
      <div className="noise" aria-hidden="true"></div>
      <div className="wrap quote-grid" ref={ref}>
        <div className="quote-copy">
          <h2 className="reveal">Message us your postcodes and we'll quote you back.</h2>
          <p className="reveal reveal-delay-1">Collection and delivery postcodes, what needs moving and your preferred date — that's all it takes for a free quote, sent straight to WhatsApp.</p>
          <p className="reveal reveal-delay-2">Prefer to talk it through? Call <a href="tel:+447922227398">07922 227398</a> any time.</p>
        </div>
        <form className="quote-form reveal reveal-delay-1" onSubmit={submit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="qName">Name</label>
              <input type="text" id="qName" name="name" required value={form.name} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="qPhone">Phone number</label>
              <input type="tel" id="qPhone" name="phone" required value={form.phone} onChange={update} />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="qFrom">Collection postcode</label>
              <input type="text" id="qFrom" name="from" placeholder="e.g. BH15 1AA" value={form.from} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="qTo">Delivery postcode</label>
              <input type="text" id="qTo" name="to" placeholder="e.g. BH23 2BB" value={form.to} onChange={update} />
            </div>
          </div>
          <div className="form-row">
            <div className="field full">
              <label htmlFor="qDate">Preferred date</label>
              <input type="date" id="qDate" name="date" value={form.date} onChange={update} />
            </div>
          </div>
          <div className="form-row">
            <div className="field full">
              <label htmlFor="qDetails">What needs moving</label>
              <textarea id="qDetails" name="details" placeholder="e.g. studio flat, single sofa, small office move" value={form.details} onChange={update}></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-accent">Send To WhatsApp</button>
          <p className="quote-note">Opens WhatsApp with your details filled in — nothing is sent until you press send there.</p>
        </form>
      </div>
    </section>
  );
}