export function ContactForm() {
  return (
    <form className="contact-form panel">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Company
        <input type="text" name="company" placeholder="Company name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="name@company.com" />
      </label>
      <label>
        Current AI goal
        <textarea name="message" rows="5" placeholder="Tell Falcon what you want to achieve with AI." />
      </label>
      <button className="button button-primary" type="submit">
        Send inquiry
      </button>
    </form>
  );
}
