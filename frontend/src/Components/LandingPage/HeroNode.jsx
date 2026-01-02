import { Handle, Position } from '@xyflow/react';

const HeroNode = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 min-w-75 overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">

            <div className="h-10 border-b border-gray-100 px-4 flex items-center justify-between bg-white">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {data.tag || 'Component'}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-400 transition-colors"></div>
            </div>

            <div className="p-5 bg-white">
                {data.label}
            </div>


            {data.type !== 'input' && (
                <Handle
                    type="target"
                    position={Position.Left}
                    className="!w-3 !h-3 !bg-gray-300 !border-2 !border-white !shadow-sm hover:!bg-blue-500 hover:!w-4 hover:!h-4 transition-all"
                />
            )}

            {data.type !== 'output' && (
                <Handle
                    type="source"
                    position={Position.Right}
                    className="!w-3 !h-3 !bg-gray-300 !border-2 !border-white !shadow-sm hover:!bg-blue-500 hover:!w-4 hover:!h-4 transition-all"
                />
            )}
        </div>
    );
};

export default HeroNode;