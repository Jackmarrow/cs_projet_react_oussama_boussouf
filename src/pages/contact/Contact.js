import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="distorted-background d-flex justify-content-center align-items-center">
        <h2 className="text-white fw-bold">CONTACT</h2>
      </div>
        <div className="d-flex justify-content-center py-5 px-1 px-lg-0">
        <div className="d-lg-flex justify-content-lg-center gap-lg-3">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15152864.798740195!2d-117.87673060811983!3d21.994833674820292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba260e8fffc505%3A0x72919a332d1489d3!2sFashe!5e0!3m2!1sfr!2sma!4v1690540472578!5m2!1sfr!2sma" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="form">
            <h2 className="my-1">Send us your message</h2>
            <form action="#">
              <input className="w-100 mb-2 py-13 px-1 border border-secondary-subtle" type="text" placeholder="Full Name"/>
              <input className="w-100 mb-2 py-13 px-1 border border-secondary-subtle" type="number" placeholder="Phone Number"/>
              <input  className="w-100 mb-2 py-13 px-1 border border-secondary-subtle"type="email" placeholder="Email Address"/>
              <textarea className="w-100 mb-1 py-13 px-1 border border-secondary-subtle" name="message" cols="30" rows="5" placeholder="Message"></textarea>
            </form>
            <button className="btn bg-black text-white rounded-pill px-4 py-13">SEND</button>
          </div>
        </div>
        </div>
    </section>
  );
};
