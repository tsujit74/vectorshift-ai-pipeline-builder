// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80,}}>
      <BaseNode id={id} title="Input" outputs={[{ id: "value", top: 50 }]}>
        <div>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} style={{width:"95%"}} />
          </label>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange} style={{width:"100%"}}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
        <Handle type="source" position={Position.Right} id={`${id}-value`} />
      </BaseNode>
    </div>
  );
};
