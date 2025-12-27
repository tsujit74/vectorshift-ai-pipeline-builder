import { BaseNode } from './BaseNode';

export const LabelNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Label Node"
      outputs={[{ id: 'output', top: 50 }]}
    >
      <span>{data?.text || 'This is a label'}</span>
    </BaseNode>
  );
};
