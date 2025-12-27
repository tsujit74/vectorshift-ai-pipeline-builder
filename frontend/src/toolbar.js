import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="checkbox" label="Checkbox" />
        <DraggableNode type="number" label="Number" />
        <DraggableNode type="date" label="Date" />
        <DraggableNode type="label" label="Label" />
      </div>
    </div>
  );
};
