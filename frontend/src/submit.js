import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();
      alert(`Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    } catch (err) {
      console.error(err);
      alert('Error submitting pipeline');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <button onClick={handleSubmit} style={{width:100,padding:5, fontSize:"16px",}}>Submit</button>
    </div>
  );
};
