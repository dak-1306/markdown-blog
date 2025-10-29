import Header from "./Header";
import Footer from "./Footer";
function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg justify-between space-y-10">
      <Header />
      <main className="flex-grow mx-auto px-4 py-8 bg-surface rounded-lg shadow-soft">
        {children}
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
