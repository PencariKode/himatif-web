import Header from "@c/nav/Header";
import Footer from "@c/nav/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
