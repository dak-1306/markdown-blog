import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col space-y-6 bg-bg text-text">
      <Header />
      {title && (
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary text-center mx-auto max-w-[90%] pt-2 mb-4">
          {title}
        </h1>
      )}
      <main className="flex-grow mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10 bg-surface rounded-lg shadow-soft">
        {children}
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
