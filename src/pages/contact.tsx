import React from "react";
import PrimaryHeader from "../components/primary-header";
import ContactDetails from "../components/contact-details";
import Footer from "../components/footer";

export default ({ children }) => (
  <div className="contact">
    <PrimaryHeader internal />
    <ContactDetails />
    <Footer />
  </div>
);
