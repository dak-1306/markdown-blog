function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 font-body">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Markdown Blog. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
