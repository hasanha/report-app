import "./App.css";
import PerformanceOverview from "./components/PerformanceOverview";
import CreatorCard from "./components/CreatorCard";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <div className="header">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          WDM Homework Report
        </motion.h1>
      </div>
      <PerformanceOverview />

      <div className="creators-container">
        <CreatorCard name="Hasan Hammadeh" userId="hasan_311469" />
        <CreatorCard name="Bashar Qarat" userId="bashar_301296" />
        <CreatorCard name="Ali Ahmad" userId="ali_haidar_296891" />
        <CreatorCard name="Jawa Shriba" userId="jawa_317878" />
      </div>
    </div>
  );
}

export default App;
