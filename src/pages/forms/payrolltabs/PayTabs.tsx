import React, { useState } from "react";
import Aditions from "./Aditions";
import Overtime from "./Overtime";
import Deductions from "./Deductions";
import Adition2 from "./Adition2";
interface TabData {
    
    label: string;
    value: string;
    desc: string;
  }
function TabExample() {
    const data: TabData[] = [
        {
         
          label: "Aditions",
          value: "at",
          desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people 
            who are like offended by it, it doesn't matter.`,
        },
        {
         
          label: "Overtime",
          value: "bm",
          desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          
          label: "Deduction",
          value: "vl",
          desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
        },
      ];
    const [activeTab, setActiveTab] = useState("at");
  
    const handleTabClick = (tab: React.SetStateAction<string>) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="tabs ">
        <div className="tabs-header  ">
          {data?.map(({  label, value }) => (
            <div
              key={value}
              className={`tab ${activeTab === value ? "active" : ""} flex`}
              onClick={() => handleTabClick(value)}
            >
              
             <h4> {label}</h4>
            </div>
          ))}
        </div>
        {/* <hr className="separator" /> */}
        <div className="tabs-body">
          {activeTab === "at" && (
            <div>
            <Adition2/>
            </div>
          )}
  
          {activeTab === "bm" && (
            <div>
             <Overtime/>
            </div>
          )}
          {activeTab === "vl" && (
            <div>
              <Deductions/>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default TabExample;