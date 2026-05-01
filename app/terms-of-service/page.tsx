import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ScalaryX",
  description: "ScalaryX Terms of Service - Learn the terms and conditions for using our AI automation and digital marketing services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#08090d] overflow-x-hidden">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-400 mb-12">Last updated: May 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the ScalaryX website and the AI automation and digital marketing services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Nature of Services</h2>
              <p className="mb-4">ScalaryX provides the following services:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-400">
                <li>AI automation system design, development, and deployment</li>
                <li>Digital marketing solutions and campaign management</li>
                <li>Workflow optimization and business process automation</li>
                <li>System integrations connecting various business tools and platforms</li>
                <li>Custom AI agent development and implementation</li>
                <li>Consultation and strategy development for automation and marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Client Responsibilities</h2>
              <p className="mb-4">To enable us to deliver services effectively, you agree to:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-400">
                <li>Provide accurate and complete information required for service execution</li>
                <li>Grant necessary access to systems, platforms, and tools as needed</li>
                <li>Communicate promptly and cooperate throughout the project lifecycle</li>
                <li>Review and provide feedback on deliverables within reasonable timeframes</li>
                <li>Ensure compliance with applicable laws and regulations in your business operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Dependencies</h2>
              <p>
                Our services may rely on third-party platforms, APIs, and services (including but not limited to automation tools, cloud services, CRM systems, and advertising platforms). We strive to ensure reliable integration but cannot guarantee uninterrupted service. We are not liable for failures, outages, or changes to third-party systems that affect service delivery. Any issues arising from third-party API modifications or deprecations will be addressed as reasonably practicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Service Execution Timeline</h2>
              <p>
                Project timelines depend on the complexity of requirements, timely client feedback, and availability of required resources. We will make reasonable efforts to meet agreed-upon milestones, but timelines may be extended due to factors beyond our control, including scope changes, third-party delays, or unforeseen technical challenges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                <strong>Client Ownership:</strong> Upon completion and full payment, all custom-developed systems, workflows, automations, and deliverables created specifically for you become your intellectual property. You may use, modify, and distribute these assets without restriction.
              </p>
              <p className="mb-4">
                <strong>Pre-Existing Tools:</strong> We retain ownership of pre-existing tools, frameworks, templates, and general methodologies used across multiple projects.
              </p>
              <p>
                <strong>Restrictions:</strong> You may not redistribute, resell, or share our proprietary tools, automation frameworks, or general knowledge without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information exchanged during the course of engagement. We implement appropriate measures to protect your business data and project details. You agree not to disclose our proprietary methodologies, pricing, or internal processes to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, ScalaryX shall not be liable for:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-400">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Service interruptions caused by third-party platforms or force majeure events</li>
                <li>Issues arising from client-provided information or inadequate access</li>
                <li>Damage resulting from improper use of delivered systems</li>
              </ul>
              <p className="mt-4">
                Our total liability shall not exceed the total amount paid for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate engagement with written notice. Upon termination:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-400">
                <li>Client shall pay for all services completed up to the termination date</li>
                <li>Delivered intellectual property (if paid for) will be transferred to client</li>
                <li>Confidentiality obligations shall survive termination</li>
              </ul>
              <p className="mt-4">
                We reserve the right to terminate services immediately if Terms are breached, including non-payment, provision of false information, or use of services for unlawful purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">10. Warranty Disclaimer</h2>
              <p>
                Services are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that automation systems will operate without interruption or meet all possible requirements. We will address bugs and technical issues within reasonable timeframes after delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">12. Contact Us</h2>
              <p>
                For questions or concerns about these Terms, please contact us at:
              </p>
              <p className="mt-2 text-[#0084FF]">scalaryx@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}