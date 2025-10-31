function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 font-body">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p>
          &copy; {new Date().getFullYear()} My Markdown Blog. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
