import Profile from '../components/profile'
import Header from "../components/header";
import Footer from "../components/footer";

export default function MyApp() {
  return (
    <>
      <Header />
      <div>
        <main>
          <Profile />
        </main>
      </div>
      <Footer />
    </>
  )
}