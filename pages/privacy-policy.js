import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../components/layouts/Layout";
import { CONTACT_INFO } from "../constants/contact";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy || Plain Agency</title>
      </Head>

      <Breadcrumb title="Privacy Policy" current="Privacy Policy" />

      <main className="page-wrappper">
        <div className="privacy-policy-area ax-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="section-title">
                      <h4>Privacy Policy</h4>
                      <p>Last updated: 21 January 2025</p>
                    </div>
                    <div className="content">
                      <h3>Introduction</h3>
                      <p>
                        At Plain Agency, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and maintained in accordance with all applicable data protection laws.
                      </p>

                      <h3>Information We Collect</h3>
                      <p>
                        We collect information that you provide directly to us, including:
                      </p>
                      <ul>
                        <li>Name and contact details</li>
                        <li>Company information</li>
                        <li>Project requirements and preferences</li>
                        <li>Communication history</li>
                      </ul>

                      <h3>How We Use Your Information</h3>
                      <p>
                        We use your information to:
                      </p>
                      <ul>
                        <li>Provide and improve our services</li>
                        <li>Communicate with you about your projects</li>
                        <li>Send relevant updates and newsletters</li>
                        <li>Ensure website security and prevent fraud</li>
                      </ul>

                      <h3>Data Protection</h3>
                      <p>
                        We implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including:
                      </p>
                      <ul>
                        <li>Encryption of personal data</li>
                        <li>Regular security assessments</li>
                        <li>Staff training on data protection</li>
                        <li>Access controls and authentication</li>
                      </ul>

                      <h3>Your Rights</h3>
                      <p>
                        Under UK data protection law, you have rights including:
                      </p>
                      <ul>
                        <li>The right to access your personal data</li>
                        <li>The right to correct any mistakes</li>
                        <li>The right to request deletion of your data</li>
                        <li>The right to restrict processing of your data</li>
                      </ul>

                      <h3>Contact Us</h3>
                      <p>
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
