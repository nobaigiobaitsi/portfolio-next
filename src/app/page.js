import Link from "next/link";
import { SiReact, SiTailwindcss, SiNextdotjs, SiDjango } from "react-icons/si";
import { FaJava, FaPython, FaNodeJs, FaGitAlt, FaHtml5, FaLinkedinIn, FaCss3, FaBootstrap, FaDocker, FaMicrosoft } from "react-icons/fa";
import { VscVscode, VscGithubInverted } from "react-icons/vsc";
import { DiVisualstudio, DiJavascript1, DiPostgresql, DiMysql, DiMongodb, DiMsqlServer } from "react-icons/di";
import { TbSql, TbBrandCSharp, TbFileCv } from "react-icons/tb";
import { SiSqlite, SiIntellijidea } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import AnimatedSection from "./components/AnimatedSection";

export default function HomePage() {
  return (

    <main className="px-4 sm:px-8 lg:px-16 mx-auto bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] min-h-screen text-[#e0e6ed]">
      <AnimatedSection>
      <section className="text-center py-12 border-t border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-semibold text-[#e0e6ed] tracking-wide">
          Stavros Angelopoulos
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-400 font-normal">
          Aspiring Software Developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/projects" className="inline-block bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-[#0a0a23] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/30 transition-transform transform hover:scale-105">
            My Projects
          </Link>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-[#0a0a23] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/30 transition-transform transform hover:scale-105">
            Contact
          </Link>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="mb-12 py-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-6 flex items-center justify-center gap-2">About Me</h2>
        <p className="text-[#e0e6ed] bg-[#1e1e30] p-6 rounded-lg mb-6 border border-[#2c2c3d] duration-300 ease-in-out hover:shadow-lg hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
          Although I studied Statistics, my true passion lies in software development. I am a passionate developer focused on building clean and efficient applications. Always following best practices and eager to learn new technologies and tools.
        </p>
        <p className="text-[#e0e6ed] bg-[#1e1e30] p-6 rounded-lg mb-6 border border-[#2c2c3d] duration-300 ease-in-out hover:shadow-lg hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
          I work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">Java</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">JavaScript</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">Python</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">SQL</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">C#</span>, and I have built projects using frameworks like <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">React</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">Next.js</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">Django</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-semibold">WPF</span>. I am equally comfortable on the frontend and backend, aiming to create seamless user experiences backed by solid logic and architecture. I strive to learn as much as possible and stay updated with the latest trends in software development.
        </p>
        <p className="text-[#e0e6ed] bg-[#1e1e30] p-6 rounded-lg mb-6 border border-[#2c2c3d] duration-300 ease-in-out hover:shadow-lg hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">What makes me stand out is that I truly care about learning and growing as a developer. It started as a passion but now it has become my desired career path.</p>
        <p className="text-[#e0e6ed] bg-[#1e1e30] p-6 rounded-lg mb-6 border border-[#2c2c3d] duration-300 ease-in-out hover:shadow-lg hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">On my free time, I enjoy cooking, exploring new cuisines, and experimenting with recipes. Also, I love watching movies and TV shows.</p>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      <section className="mt-12 py-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-6 flex items-center justify-center gap-2">Tech Stack</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 text-gray-400 bg-[#1e1e30] p-4 rounded-lg shadow-inner">
          <div>
            <h3 className="font-medium text-[#e0e6ed]">Databases</h3>
            <ul className="space-y-1 ">
              <li><DiPostgresql className="inline mr-1 text-sky-400" title="PostgreSQL" /> PostgreSQL</li>
              <li><DiMysql className="inline mr-1 text-sky-400" title="MySQL" /> MySQL</li>
              <li><SiSqlite className="inline mr-1 text-sky-400" title="SQLite" /> SQLite</li>
              <li><DiMongodb className="inline mr-1 text-sky-400" title="MongoDB" /> MongoDB</li>
              <li><DiMsqlServer className="inline mr-1 text-sky-400" title="Microsoft SQL Server" /> Microsoft SQL Server</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Frameworks</h3>
            <ul className="space-y-1">
              <li><SiNextdotjs className="inline mr-1 text-sky-400" title="Next.js" /> Next.js</li>
              <li><SiDjango className="inline mr-1 text-sky-400" title="Django" /> Django</li>
              <li><SiReact className="inline mr-1 text-sky-400" title="React" /> React</li>
              <li><BiLogoSpringBoot className="inline mr-1 text-sky-400" title="Spring Boot" /> Spring Boot</li>
              <li><FaMicrosoft className="inline mr-1 text-sky-400" title="WPF" /> WPF</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed]">Languages</h3>
            <ul className="space-y-1">
              <li><DiJavascript1 className="inline mr-1 text-sky-400" title="JavaScript" /> JavaScript</li>
              <li><FaPython className="inline mr-1 text-sky-400" title="Python" /> Python</li>
              <li><FaJava className="inline mr-1 text-sky-400" title="Java" /> Java</li>
              <li><TbBrandCSharp className="inline mr-1 text-sky-400" title="C#" /> C#</li>
              <li><TbSql className="inline mr-1 text-sky-400" title="SQL" /> SQL</li>
              <li><FaHtml5 className="inline mr-1 text-sky-400" title="HTML" /> HTML</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed] ">Tools</h3>
            <ul className="space-y-1">
              <li><FaGitAlt className="inline mr-1 text-sky-400" title="Git" /> Git</li>
              <li><VscGithubInverted className="inline mr-1 text-sky-400" title="GitHub" /> GitHub</li>
              <li><FaDocker className="inline mr-1 text-sky-400" title="GitHub" /> Docker</li>
              <li><FaNodeJs className="inline mr-1 text-sky-400" title="Node.js" /> Node.js</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed] ">IDEs</h3>
            <ul className="space-y-1">
              <li><SiIntellijidea className="inline mr-1 text-sky-400" title="IntelliJ IDEA" /> IntelliJ IDEA</li>
              <li><VscVscode className="inline mr-1 text-sky-400" title="Visual Studio Code" /> Visual Studio Code</li>
              <li><DiVisualstudio className="inline mr-1 text-sky-400" title="Visual Studio" /> Visual Studio</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#e0e6ed] ">CSS Frameworks</h3>
            <ul className="space-y-1">
              <li><FaCss3 className="inline mr-1 text-sky-400" title="CSS" /> Vanilla CSS</li>
              <li><SiTailwindcss className="inline mr-1 text-sky-400" title="Tailwind CSS" /> Tailwind CSS</li>
              <li><FaBootstrap className="inline mr-1 text-sky-400" title="Bootstrap" /> Bootstrap</li>
            </ul>
          </div>

        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-12 py-12 border-t border-gray-700">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-6 flex items-center justify-center gap-2">My Links</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://github.com/nobaigiobaitsi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1e1e30] border border-[#2c2c3d] hover:border-sky-500 hover:shadow-sky-400/20 shadow-md p-4 rounded-lg transition-transform transform hover:scale-[1.03]"
            >
              <VscGithubInverted className="text-3xl text-sky-400" title="GitHub" />
              <div>
                <p className="text-[#e0e6ed] font-semibold">GitHub</p>
                <p className="text-sm text-gray-400">nobaigiobaitsi</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/s-angelopoulos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1e1e30] border border-[#2c2c3d] hover:border-sky-500 hover:shadow-sky-400/20 shadow-md p-4 rounded-lg transition-transform transform hover:scale-[1.03]"
            >
              <FaLinkedinIn className="text-3xl text-sky-400" title="LinkedIn" />
              <div>
                <p className="text-[#e0e6ed] font-semibold">LinkedIn</p>
                <p className="text-sm text-gray-400">Stavros Angelopoulos</p>
              </div>
            </a>

            <a
              href="/Stavros_Angelopoulos_CV.pdf"
              download
              className="flex items-center gap-4 bg-[#1e1e30] border border-[#2c2c3d] hover:border-sky-500 hover:shadow-sky-400/20 shadow-md p-4 rounded-lg transition-transform transform hover:scale-[1.03]"
            >
              <TbFileCv className="text-3xl text-sky-400" title="CV" />
              <div>
                <p className="text-[#e0e6ed] font-semibold">CV</p>
                <p className="text-sm text-gray-400">Download my CV</p>
              </div>
            </a>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mt-12 py-16 text-center bg-[#1e1e30] rounded-lg shadow-inner relative overflow-hidden">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-4 pb-2">
            Let&apos;s Work Together
          </h2>

          <p className="text-gray-400 mb-8">
            I am currently open to full-time positions, internships, or freelance gigs. Let&apos;s create something amazing.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-[#0a0a23] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/30 transition-transform transform hover:scale-105"
          >
            Contact Me
          </Link>
        </section>
      </AnimatedSection>


    </main>
  );
}