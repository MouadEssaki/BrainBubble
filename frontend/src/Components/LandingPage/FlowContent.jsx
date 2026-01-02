import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { applyNodeChanges, applyEdgeChanges, addEdge, useReactFlow } from '@xyflow/react';
import { ReactFlow, Background } from '@xyflow/react';
import HeroNode from './HeroNode';


const getNodes = (isMobile) => [
    {
        id: 'n1',
        type: 'heroNode',
        position: isMobile ? { x: 0, y: 0 } : { x: -200, y: -300 },
        data: {
            tag: 'Synapse',
            label: (
                <div className="text-center py-6 md:py-8">
                    <h1 className="Melodrama-Bold text-2xl md:text-5xl tracking-tight leading-[1.1] text-[#342F2F] mb-2">
                        Turn Chaos <br />
                        Into Clarity
                    </h1>
                </div>
            )
        }
    },
    {
        id: 'n2',
        type: 'heroNode',
        position: isMobile ? { x: 0, y: 650 } : { x: 250, y: -400 },
        data: {
            tag: 'Step 1',
            type: 'output',
            label: (
                <div className="text-center">
                    <h1 className="Melodrama-Medium text-xl md:text-4xl tracking-tight leading-[1.1] text-[#342F2F] mb-2">
                        Visualize
                    </h1>

                </div>
            )
        }
    },
    {
        id: 'n3',
        type: 'heroNode',
        position: isMobile ? { x: 0, y: 250 } : { x: 450, y: -250 },
        data: {
            tag: 'Step 2',
            type: 'output',
            label: (
                <div className="text-center">
                    <h1 className="Melodrama-Medium text-xl md:text-4xl tracking-tight leading-[1.1] text-[#342F2F] mb-2">
                        Your
                    </h1>
                </div>
            )
        }
    },
    {
        id: 'n4',
        type: 'heroNode',
        position: isMobile ? { x: 0, y: 450 } : { x: 350, y: -100 },
        data: {
            tag: 'Step ',
            type: 'output',
            label: (
                <div className="text-center">
                    <h1 className="Melodrama-Medium text-xl md:text-4xl tracking-tight leading-[1.1] text-[#342F2F] mb-2">
                        Ideas
                    </h1>
                </div>
            )
        }
    },

];

const initialEdges = [
    { id: 'e1-2', source: 'n1', target: 'n2', type: 'default', animated: true, style: { stroke: '#e5e7eb', strokeWidth: 2 } },
    { id: 'e3-2', source: 'n1', target: 'n3', type: 'default', animated: true, style: { stroke: '#e5e7eb', strokeWidth: 2 } },
    { id: 'e2-4', source: 'n1', target: 'n4', type: 'default', animated: true, style: { stroke: '#e5e7eb', strokeWidth: 2 } }
];

const FlowContent = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState(initialEdges);
    const nodeTypes = useMemo(() => ({ heroNode: HeroNode }), []);

    const { fitView } = useReactFlow();

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setNodes(getNodes(isMobile));

            setTimeout(() => {
                fitView({ padding: 0.3, duration: 800 });
            }, 100);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [fitView]);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            panOnScroll={false}
            zoomOnScroll={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            panOnDrag={window.innerWidth >= 768}
            autoPanOnNodeDrag={false}
        >
            <Background gap={24} size={1} color="Black" variant="dots" />
        </ReactFlow>
    );
};

export default FlowContent;


