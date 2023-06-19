import Link from "next/link";
import { useState } from "react";

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="block-tabs loaded">
      <ul>
        <li>
          <a
            className={activeTab === 0 ? "is-active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Peça ajuda
          </a>
        </li>
        <li>
          <a
            className={activeTab === 1 ? "is-active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Faça Parte
          </a>
        </li>
      </ul>
      <div
        className={`block-tab-content ${
          activeTab === 0 ? "is-active" : ""
        }`}
      >
        <p>
          Once deposited funds are added to your Investor Account, you will
          receive a confirmation e-mail and will be able to make investments.
        </p>
        <div className="site-content">
            <div className="text-center">
                <Link href="/event" className="button button-big button-filled button-secondary">Agendar</Link> 
            </div>    
        </div>
      </div>
      <div
        className={`block-tab-content ${
          activeTab === 1 ? "is-active" : ""
        }`}
      >
        <p>
          We keep investors money segregated from funds for business operations.
          You can withdraw funds that are not invested in loans from your
          investor account to your account at any time.
        </p>
      </div>
    </div>
  );
};

export default TabPanel;
