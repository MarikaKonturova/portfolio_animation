import React from "react";
export function Contact() {
  return (
    <section className="contact">
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" cols={30} rows={10} />
        <button>Submit</button>
      </form>
    </section>
  );
}
