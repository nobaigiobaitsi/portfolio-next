import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import Carousel from "../components/Carousel";


export default function ProjectsPage() {

  const inventoryImages = [
    "/projects/inventoryManagement/Inventory-Management-1.png",
    "/projects/inventoryManagement/Inventory-Management-2.png",
    "/projects/inventoryManagement/Inventory-Management-3.png",
    "/projects/inventoryManagement/Inventory-Management-4.png",
    "/projects/inventoryManagement/Inventory-Management-5.png",
  ];

  const greekendImages = [
    "/projects/greekendTransfers/Greekend-Transfers-1.png",
    "/projects/greekendTransfers/Greekend-Transfers-2.png",
    "/projects/greekendTransfers/Greekend-Transfers-3.png",
    "/projects/greekendTransfers/Greekend-Transfers-4.png",
    "/projects/greekendTransfers/Greekend-Transfers-5.png",
    "/projects/greekendTransfers/Greekend-Transfers-6.png",
  ];

  return (
    <main className="px-4 sm:px-8 lg:px-16 mx-auto bg-gradient-to-br from-[#0a0a23] to-[#1a1a2e] min-h-screen text-[#e0e6ed]">
      <AnimatedSection>
        <section className="text-center py-12 border-t border-gray-700">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            My Projects
          </h1>
          <p className="mt-2 text-gray-400 text-lg">
            A collection of personal and professional work showcasing my skills and growth.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="gap-8 py-12 border-t border-gray-700 w-full">

          <div className="bg-[#1e1e30] rounded-lg border border-[#2c2c3d] p-6 hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
            <h3 className="text-xl font-semibold text-[#e0e6ed] mb-2">
              Inventory Management System
            </h3>
            <Carousel images={inventoryImages} />
            <p className="text-gray-400 text-sm mb-4">
              A full-featured inventory system built with Django, Python and Bootstrap featuring 4 operations (Add Product, Update Product, Delete Product, View Products). It&apos;s designed to be user-friendly and efficient, helping users manage their inventory effortlessly.
            </p>
            <p className="text-sm text-sky-400 mb-2">Django · Python · Bootstrap</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/nobaigiobaitsi/inventory-django.git"
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="gap-8 py-12 border-t border-gray-700 w-full">

          <div className="bg-[#1e1e30] rounded-lg border border-[#2c2c3d] p-6 hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
            <h3 className="text-xl font-semibold text-[#e0e6ed] mb-2">
              Greekend Transfers
            </h3>
            <Carousel images={greekendImages} />
            <p className="text-gray-400 text-sm mb-4">
              A live website built for Greekend Transfers, a company offering transportation services, rentals, and tours across Greece. This site is built with React + Vite, JavaScript and classic CSS. It features a modern design, responsive layout, and smooth user experience, showcasing my skills in front-end development.
            </p>
            <p className="text-sm text-sky-400 mb-2">React · Vite · JavaScript · CSS</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/nobaigiobaitsi/cars-transfer.git"
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.greekendtransfers.com/"
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
              >
                See the site
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="gap-8 py-12 border-t border-gray-700 w-full">

          <div className="bg-[#1e1e30] rounded-lg border border-[#2c2c3d] p-6 hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
            <h3 className="text-xl font-semibold text-[#e0e6ed] mb-2">
              AI Powered Language Coach
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              In Progress. A language coaching web app built with Django and Python for the backend logic and React + Vite for the frontend. It contains a quiz generator and an essay feedback tool. It features a user-friendly interface and real-time feedback. Development will resume once I have access to a paid OpenAI API plan.
            </p>
            <p className="text-sm text-sky-400 mb-2">Django · Python · React · Vite</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/nobaigiobaitsi/language-coach-django.git"
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="gap-8 py-12 border-t border-gray-700 w-full">

          <div className="bg-[#1e1e30] rounded-lg border border-[#2c2c3d] p-6 hover:border-sky-500 hover:shadow-sky-400/20 shadow-md transition-transform transform hover:scale-[1.03]">
            <h3 className="text-xl font-semibold text-[#e0e6ed] mb-2">
              My portfolio Site
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              This very site you are currently viewing, built with Next.js, React, and Tailwind CSS. It showcases my projects, skills, and experience in a clean and modern design. The site is fully responsive and optimized for performance, providing a seamless user experience across devices.
            </p>
            <p className="text-sm text-sky-400 mb-2">Next.js · React · Tailwind CSS</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/nobaigiobaitsi/my-portfolio.git"
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="text-center py-12 border-t border-gray-700 mx-auto">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
            And Many More!
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            These are just a few selected projects. I am constantly exploring new ideas, building tools, and improving my skills through hands-on experience.
          </p>
          <p className="text-gray-400 mt-2 text-lg">
            Check out my GitHub for more ongoing and experimental work.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/nobaigiobaitsi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sky-400 hover:text-sky-300 font-medium transition"
            >
            View more on GitHub
            </a>
          </div>
        </section>
      </AnimatedSection>


    </main>
  );
}