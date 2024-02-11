import Image from "next/image";

export default function Contact() {
  return (
    <section id="content" className="s-content s-content--page">
      <div className="row entry-wrap">
        <div className="column lg-12">
          <article className="entry">
            <header className="entry__header entry__header--narrow">
              <h1 className="entry__title">Say Hello.</h1>
            </header>
            s
            <div className="entry__media">
              <figure className="featured-image">
                <Image
                  src="/images/thumbs/contact/contact-1200.jpg"
                  sizes="(max-width: 2400px) 100vw, 2400px"
                  alt=""
                  width={100}
                  height={100}
                />
              </figure>
            </div>
            <div className="content-primary">
              <div className="entry__content">
                <p className="lead">
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
                  nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                  incididunt adipisicing veniam velit id fugiat enim mollit amet
                  anim veniam dolor dolor irure velit commodo cillum sit nulla
                  ullamco magna amet magna cupidatat qui labore cillum cillum
                  cupidatat fugiat nostrud.
                </p>

                <p>
                  Eligendi quam at quis. Sit vel neque quam consequuntur
                  expedita quisquam. Incidunt quae qui error. Rerum non facere
                  mollitia ut magnam laboriosam. Quisquam neque quia ex eligendi
                  repellat illum quibusdam aut. Architecto quam consequuntur
                  totam ratione reprehenderit est praesentium.
                </p>

                <div className="row block-large-1-2 block-tab-whole entry__blocks">
                  <div className="column">
                    <h4>Where to Find Us</h4>
                    <p>
                      1600 Amphitheatre Parkway
                      <br />
                      Mountain View, CA
                      <br />
                      94043 US
                    </p>
                  </div>

                  <div className="column">
                    <h4>Contact Info</h4>
                    <p>
                      someone@yourdomain.com
                      <br />
                      info@yourdomain.com <br />
                      Phone: (+63) 555 1212
                    </p>
                  </div>
                </div>

                <h4>Feel Free to Say Hi.</h4>

                <form
                  name="cForm"
                  id="cForm"
                  className="entry__form"
                  method="post"
                  action=""
                  autoComplete="off"
                >
                  <fieldset className="row">
                    <div className="column lg-6 tab-12 form-field">
                      <input
                        name="cName"
                        id="cName"
                        className="u-fullwidth"
                        placeholder="Your Name"
                        value=""
                        type="text"
                      />
                    </div>

                    <div className="column lg-6 tab-12 form-field">
                      <input
                        name="cEmail"
                        id="cEmail"
                        className="u-fullwidth"
                        placeholder="Your Email"
                        value=""
                        type="text"
                      />
                    </div>

                    <div className="column lg-12 form-field">
                      <input
                        name="cWebsite"
                        id="cWebsite"
                        className="u-fullwidth"
                        placeholder="Website"
                        value=""
                        type="text"
                      />
                    </div>

                    <div className="column lg-12 message form-field">
                      <textarea
                        name="cMessage"
                        id="cMessage"
                        className="u-fullwidth"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <div className="column lg-12">
                      <input
                        name="submit"
                        id="submit"
                        className="btn btn--primary btn-wide btn--large u-fullwidth"
                        value="Add Comment"
                        type="submit"
                      />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
