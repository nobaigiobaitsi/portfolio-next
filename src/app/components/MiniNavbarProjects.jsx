'use client';

export default function MiniNavbarProjects() {
  const projects = [
    {id: 'ims', title: 'Inventory Management System'},
    {id: 'ts', title: 'Greekend Transfers'},
    {id: 'aiplc', title: 'AI Powered Language Coach'},
    {id: 'mps', title: 'My Portfolio Site'},
  ];

  return (
    <nav className="mt-8 mb-4">
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
        <span className="font-semibold text-gray-300 hidden sm:block">
          Jump to:
        </span>
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="px-4 py-2 rounded-full text-sm font-medium border border-gray-600 bg-gray-800/50 text-sky-300 hover:bg-sky-500 hover:text-white transition-colors duration-300 shadow-sm"
          >
            {project.title}
          </a>
        ))}
      </div>
    </nav>
  );
}