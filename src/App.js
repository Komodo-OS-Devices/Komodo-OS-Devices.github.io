import { useEffect } from 'react';
import './scss/main.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Download from './pages/Download';
import Merch from './pages/Merch';
import Donate from './pages/Donate';
import Changelog from './pages/Changelog';
import Team from './pages/Team';
import Home from './pages/Home';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const countFetch = () => {
    // Download fetch count
    // Get id from HTML
    const downloadCount = document.getElementById('download');

    // Get date now
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth();
    const date = current.getDate();

    // Fetch json from sourceforge
    fetch(
      `https://sourceforge.net/projects/komodos-rom/files/stats/json?start_date=2019-10-11&end_date=${year}-${month}-${date}&os_by_country=false&period=monthly`,
      { method: 'GET' }
    )
      .then((response) => response.json())
      .then((result) => {
        downloadCount.appendChild(
          document.createTextNode(`${result.summaries.time.downloads}`)
        );
      }) // Displayed on HTML
      .catch((error) => console.log('error', error));

    // Fetch for device total
    // Get id form HTML
    const deviceTotal = document.getElementById('device');

    fetch(
      `https://raw.githubusercontent.com/Komodo-OS/official-devices/12/komodo.devices`,
      { method: 'GET' }
    )
      .then((response) => response.text())
      .then((result) => {
        const total = result.split(/\r\n|\r|\n/).length;
        deviceTotal.appendChild(document.createTextNode(`${total - 1}`));
      }) // Displayed on HTML
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
    AOS.refresh();
    countFetch();
    setTimeout(function () {
      document.getElementById('preloader').classList.add('hide');
      setTimeout(function () {
        document.getElementById('preloader').classList.add('d-none');
      }, 300);
    }, 1000);
  }, []);

  return (
    <div>
      <Router>
        <div id="preloader"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
