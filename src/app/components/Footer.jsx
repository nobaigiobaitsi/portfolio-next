export default function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-[#e0e6ed] py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Stavros Angelopoulos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}