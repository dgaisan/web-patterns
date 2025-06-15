import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// // import ContentApp from "./ContentApp";
const rootElement = document.createElement("div");
// rootElement.style.position = "fixed";
// rootElement.style.right = "0";
// rootElement.style.top = "0";
// rootElement.style.width = "300px";
// rootElement.style.height = "100%";
// rootElement.style.backgroundColor = "#fff";
// rootElement.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
// rootElement.innerHTML = `
//             <h2>Notes</h2>
//             <div>
//                 <label>
//                 Category:
//                 <select id="category">
//                     <option value="">Select Category</option>
//                     <option value="Work">Work</option>
//                     <option value="Personal">Personal</option>
//                     <option value="Other">Other</option>
//                 </select>
//                 </label>
//             </div>
//             <div>
//                 <label>
//                 Tags:
//                 <input type="text" id="tags" placeholder="Tags"/>
//                 </label>
//             </div>
//             <div>
//                 <label>
//                 Notes:
//                 <textarea id="notes" placeholder="Enter your notes here"></textarea>
//                 </label>
//             </div>
//           `;
rootElement.id = "my-extension-root";

document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(
  rootElement as HTMLElement
);

// ReactDOM.hydrateRoot(rootElement, <ContentApp />)

declare const chrome: any;

const RandomApp: React.FC = () => {
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log("hey hey hey");
    });
  }, []);

  useEffect(() => {
    console.log("--- Content Script from useEffect---")
  });

  return (
    <>hi</>
    // <div
    //   style={{
    //     position: "fixed",
    //     right: 0,
    //     top: 0,
    //     width: "300px",
    //     height: "100%",
    //     backgroundColor: "#fff",
    //     padding: "10px",
    //   }}
    // >
    //   Content that is trying to be in panel
    // </div>
  );
};



root.render(
  <React.StrictMode>
    <RandomApp />
  </React.StrictMode>
);

// console.log("content script------");
//document.body.innerHTML = "Hello, world!";