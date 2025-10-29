import MainLayout from "../components/layout/MainLayout.jsx";
function Home() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-heading text-primary">
        Welcome to My Blog
      </h1>
      <p className="text-lg text-body text-text">
        This is a simple blog built with React and Markdown.
      </p>
    </MainLayout>
  );
}
export default Home;
