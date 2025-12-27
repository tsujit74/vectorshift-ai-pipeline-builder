import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "10px",
        minWidth: 200,
        minHeight: 80,
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        ...style,
      }}
    >
      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${input.top || 50}%` }}
        />
      ))}

      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{title}</div>

      <div>{children}</div>

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${output.top || 50}%` }}
        />
      ))}
    </div>
  );
};
