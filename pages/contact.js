import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import SectionTitle from "../components/common/SectionTitle";
import ContactFormThree from "../components/forms/ContactFormThree";
import Layout from "../components/layouts/Layout";
import Image from "next/image";
import { CONTACT_INFO } from "../constants/contact";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact || Plain Agency</title>
      </Head>

      <Breadcrumb title="Contact" current="Contact" />

      <main className="main-wrapper">
        <div className="axil-contact-area axil-shape-position ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-5 col-12">
                <div className="contact-form-wrapper">
                  <div className="axil-contact-form contact-form-style-1">
                    <h3 className="title">Get a free Plain-Agency quote now</h3>
                    <ContactFormThree />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                <div className="axil-address-wrapper">
                  <div className="axil-address-list">
                    <div className="axil-address">
                      <i className="fas fa-phone"></i>
                      <div className="content">
                        <h4 className="title">Phone</h4>
                        <p>
                          Our customer care is open from Mon-Fri, 10:00 am to
                          6:00 pm
                        </p>
                        <p>
                          <a className="axil-link" href={`tel:${CONTACT_INFO.phone}`}>
                            {CONTACT_INFO.phoneFormatted}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="axil-address">
                      <i className="fal fa-envelope"></i>
                      <div className="content">
                        <h4 className="title">Email</h4>
                        <p>
                          Our support team will get back to in 48-h during
                          standard business hours.
                        </p>
                        <p>
                          <a className="axil-link" href={`mailto:${CONTACT_INFO.email}`}>
                            {CONTACT_INFO.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-group">
            <div className="shape shape-01">
              <i className="icon icon-contact-01" />
            </div>
            <div className="shape shape-02">
              <i className="icon icon-contact-02" />
            </div>
            <div className="shape shape-03">
              <i className="icon icon-contact-03" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
