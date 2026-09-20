"use client";

import { useI18n } from "@/lib/i18n";

export default function PrivacyContent() {
  const { t } = useI18n();

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--text-primary)", fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
          {t.footer_privacy}
        </h1>
        <p className="text-[var(--text-secondary)] mb-12">Last updated: May 2026</p>

        <div className="space-y-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>1. Introduction</h2>
            <p>
              ScalaryX is an AI automation and digital marketing agency committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our automation and marketing solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>2. Data We Collect</h2>
            <p className="mb-4">We collect information in the following categories:</p>
            <div className="space-y-4" style={{ marginRight: "1rem" }}>
              <div>
                <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>2.1 User-Provided Data</h3>
                <p>When you contact us, request a consultation, or use our services, you may provide:</p>
                <ul className="list-disc mt-2 space-y-1" style={{ marginRight: "1.5rem", color: "var(--text-muted)" }}>
                  <li>Full name and business name</li>
                  <li>Email address and phone number</li>
                  <li>Business details and project requirements</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>2.2 Technical Data</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc mt-2 space-y-1" style={{ marginRight: "1.5rem", color: "var(--text-muted)" }}>
                  <li>IP address and browser type</li>
                  <li>Device and operating system information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring URLs and interaction data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>3. How We Use Your Data</h2>
            <p className="mb-4">We use collected data for the following purposes:</p>
            <ul className="list-disc space-y-2" style={{ marginRight: "1.5rem", color: "var(--text-muted)" }}>
              <li>Delivering AI automation solutions and digital marketing services</li>
              <li>Designing and implementing workflow systems and integrations</li>
              <li>Communicating with you about project progress and updates</li>
              <li>Improving our website, services, and user experience</li>
              <li>Responding to inquiries and providing customer support</li>
              <li>Analyzing usage patterns to optimize our offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>4. Data Protection &amp; Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including encryption, access controls, and secure data storage practices. Your information is processed only by authorized personnel and we regularly review our security protocols to maintain data integrity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>5. Data Sharing</h2>
            <p>
              <strong>We do not sell, trade, or rent your personal data to third parties for commercial purposes.</strong> We may share data with trusted service providers who assist us in operating our website and delivering services, provided they maintain confidentiality. We may also disclose information when required by law or to protect our rights, safety, or property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc space-y-2" style={{ marginRight: "1.5rem", color: "var(--text-muted)" }}>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of data processing</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <span className="text-[var(--accent)]">scalaryx@gmail.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>7. Third-Party Services</h2>
            <p>
              Our services may integrate with third-party platforms and APIs (such as automation tools, CRM systems, and marketing platforms). We are not responsible for the data practices of these external services. We encourage you to review their privacy policies before providing any data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>8. Cookies &amp; Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience and analyze site traffic. You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or services. We will post any updates on this page with a revised &quot;Last updated&quot; date. Your continued use of our website or services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-2 text-[var(--accent)]">scalaryx@gmail.com</p>
          </section>
        </div>
      </div>
    </section>
  );
}
