import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: 'system', top: 33 },
        { id: 'prompt', top: 66 }
      ]}
      outputs={[{ id: 'response', top: 50 }]}
    >
      <span>This is a LLM node.</span>
    </BaseNode>
  );
};
