import React from "react";
import PrimaryHeader from "../components/primary-header";
import Article from "../components/article";
import Footer from "../components/footer";
import PurposeContent from "../content/purpose.mdx"

export default () => (
  <div className="purpose">
    <PrimaryHeader internal />

    <div className="wrap">
      <Article>
        <PurposeContent />
      </Article>
    <Footer />
    </div>
  </div>
);
