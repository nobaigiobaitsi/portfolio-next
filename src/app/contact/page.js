import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

export default function ContactPage() {
  return (
    <AnimatedSection>
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] text-[#e0e6ed] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">My Contact Information</h1>

        <p className="text-gray-400 mb-6 text-center">
          Get in touch with me.
        </p>

        <div className="space-y-4 text-center">
          <p className="bg-[#1e1e30] p-4 rounded-lg">
            <FaEnvelope className="inline mr-2" />
            Email:{" "}
            <a href="mailto:steveangelopoulos@gmail.com" className="text-sky-400 hover:underline">
              steveangelopoulos@gmail.com
            </a>
          </p>

          <p className="bg-[#1e1e30] p-4 rounded-lg">
            <FaPhone className="inline mr-2" />
            Phone Number:{""}
            <a href="tel:+306975564186" className="text-sky-400 hover:underline">
              +30 697 5564 186
            </a>
          </p>

          <p className="bg-[#1e1e30] p-4 rounded-lg">
            <FaLinkedin className="inline mr-2" />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/s-angelopoulos/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
              linkedin.com/in/s-angelopoulos
            </a>
          </p>

          <p className="bg-[#1e1e30] p-4 rounded-lg">
            <FaGithub className="inline mr-2" />
            GitHub:{" "}
            <a href="https://github.com/nobaigiobaitsi" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
              github.com/nobaigiobaitsi
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
        </div>
      </div>
    </main>
    </AnimatedSection>
  );
}