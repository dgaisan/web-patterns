import React, { useState } from "react";
import "./contentStyles.css";

const ContentApp: React.FC = () => {
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="content-panel">
      <h2 className="header">Notes</h2>
      <div>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Tags:
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags"
          />
        </label>
      </div>
      <div>
        <label>
          Notes:
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter your notes here"
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default ContentApp;
