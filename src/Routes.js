import React from "react";
import SettingPageSecurity from "pages/SettingPageSecurity";
import SettingPagePreferences from "pages/SettingPagePreferences";
import SettingEditProfile from "pages/SettingEditProfile";
import Services from "pages/Services";
import Loan from "pages/Loan";
import CreditCards from "pages/CreditCards";
import Investments from "pages/Investments";
import Accounts from "pages/Accounts";
import Transaction from "pages/Transaction";
import MainDashboard from "pages/MainDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/creditcards" element={<CreditCards />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settingeditprofile" element={<SettingEditProfile />} />
        <Route
          path="/settingpagepreferences"
          element={<SettingPagePreferences />}
        />
        <Route path="/settingpagesecurity" element={<SettingPageSecurity />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
