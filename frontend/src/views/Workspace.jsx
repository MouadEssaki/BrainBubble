import React, { useState } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import FlowContent from '../Components/LandingPage/FlowContent.jsx'; // Assurez-vous que le chemin est correct

// Icons
import {
    Layers,
    Search,
    Settings,
    ChevronDown,
    Hash,
    Type,
    Move,
    MousePointer2,
    BoxSelect,
    Palette,
    Eye,
    EyeOff,
    MoreHorizontal,
    ArrowLeft
} from 'lucide-react';

import { Link } from 'react-router-dom';

const Workspace = () => {
    // État fictif pour simuler la sélection
    const [selectedNode, setSelectedNode] = useState('Node 1');

    return (
        <div className="flex h-screen w-screen bg-[#342F2F] text-white overflow-hidden font-sans">

            {/* ================= LEFT SIDEBAR: FILE SYSTEM / LAYERS ================= */}
            <aside className="w-64 flex flex-col border-r border-white/10 bg-[#342F2F] flex-shrink-0 z-20">

                {/* Header: Workspace Name & Back */}
                <div className="h-14 flex items-center px-4 border-b border-white/10 gap-3">
                    <Link to="/Dashboard" className="btn btn-square btn-ghost btn-xs text-gray-400 hover:text-white hover:bg-white/10">
                        <ArrowLeft size={16} />
                    </Link>
                    <span className="font-bold text-sm tracking-wide truncate">Project Alpha</span>
                </div>

                {/* Search / Filter */}
                <div className="p-3">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search layers..."
                            className="w-full bg-black/20 border border-white/5 rounded-lg py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:border-white/20 text-gray-300 placeholder-gray-600 transition-colors"
                        />
                    </div>
                </div>

                {/* Layer List (File System) */}
                <div className="flex-1 overflow-y-auto px-2 pb-4">
                    <div className="flex items-center justify-between px-2 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <span>Layers</span>
                        <Layers size={12} />
                    </div>

                    <ul className="space-y-0.5">
                        {/* Layer Item Component */}
                        {['Start Process', 'Decision Logic', 'API Connector', 'Database A', 'End Response'].map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedNode(item)}
                                className={`
                                    group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-sm transition-all
                                    ${selectedNode === item ? 'bg-white/10 text-white font-medium' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}
                                `}
                            >
                                <Hash size={14} className={selectedNode === item ? 'text-blue-400' : 'text-gray-600'} />
                                <span className="flex-1 truncate">{item}</span>
                                <button className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-white transition-opacity">
                                    <Eye size={14} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Stats */}
                <div className="p-3 border-t border-white/10 text-[10px] text-gray-600 flex justify-between">
                    <span>5 Nodes</span>
                    <span>Autosaved</span>
                </div>
            </aside>


            {/* ================= CENTER: CANVAS AREA ================= */}
            <main className="flex-1 flex flex-col relative bg-gray-50/5 h-full">

                {/* Canvas Toolbar (Top Floating) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 bg-[#342F2F] border border-white/10 p-1.5 rounded-xl shadow-xl">
                    <button className="btn btn-square btn-sm btn-ghost hover:bg-white/10 text-white rounded-lg">
                        <MousePointer2 size={18} />
                    </button>
                    <button className="btn btn-square btn-sm btn-ghost hover:bg-white/10 text-gray-400 hover:text-white rounded-lg">
                        <BoxSelect size={18} />
                    </button>
                    <div className="w-px h-4 bg-white/10 mx-1"></div>
                    <button className="btn btn-square btn-sm btn-ghost hover:bg-white/10 text-gray-400 hover:text-white rounded-lg">
                        <span className="text-xs font-bold">100%</span>
                    </button>
                </div>

                {/* THE ACTUAL WORKSPACE (React Flow) */}
                {/* On force le container à prendre tout l'espace et on le rend clair pour le contraste */}
                <div className="flex-1 w-full h-full bg-[#f3f4f6] relative overflow-hidden shadow-inner">
                    <ReactFlowProvider>
                        {/* FlowContent doit être configuré pour prendre 100% width/height */}
                        <FlowContent />
                    </ReactFlowProvider>
                </div>

            </main>


            {/* ================= RIGHT SIDEBAR: PROPERTIES ================= */}
            <aside className="w-72 flex flex-col border-l border-white/10 bg-[#342F2F] shrink-0 z-20 overflow-y-auto">

                {/* Header */}
                <div className="h-14 flex items-center px-5 border-b border-white/10 justify-between">
                    <span className="font-bold text-sm">Design</span>
                    <Settings size={16} className="text-gray-500" />
                </div>

                {/* Selected Node Properties */}
                <div className="p-5 flex flex-col gap-6">

                    {/* Section: Layout / Transform */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                            <Move size={12} /> Transform
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center bg-black/20 rounded-lg px-3 py-2 border border-white/5 hover:border-white/10 transition-colors">
                                <span className="text-gray-500 text-xs mr-2 font-mono">X</span>
                                <input type="number" defaultValue="240" className="bg-transparent w-full text-sm text-right focus:outline-none" />
                            </div>
                            <div className="flex items-center bg-black/20 rounded-lg px-3 py-2 border border-white/5 hover:border-white/10 transition-colors">
                                <span className="text-gray-500 text-xs mr-2 font-mono">Y</span>
                                <input type="number" defaultValue="128" className="bg-transparent w-full text-sm text-right focus:outline-none" />
                            </div>
                            <div className="flex items-center bg-black/20 rounded-lg px-3 py-2 border border-white/5 hover:border-white/10 transition-colors">
                                <span className="text-gray-500 text-xs mr-2 font-mono">W</span>
                                <input type="number" defaultValue="200" className="bg-transparent w-full text-sm text-right focus:outline-none" />
                            </div>
                            <div className="flex items-center bg-black/20 rounded-lg px-3 py-2 border border-white/5 hover:border-white/10 transition-colors">
                                <span className="text-gray-500 text-xs mr-2 font-mono">H</span>
                                <input type="number" defaultValue="80" className="bg-transparent w-full text-sm text-right focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/5"></div>

                    {/* Section: Appearance (Colors) */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                            <Palette size={12} /> Appearance
                        </h4>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">Fill</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 uppercase">#FFFFFF</span>
                                    <div className="w-6 h-6 rounded border border-white/20 bg-white cursor-pointer"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">Stroke</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500 uppercase">#333333</span>
                                    <div className="w-6 h-6 rounded border border-white/20 bg-[#333] cursor-pointer"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">Opacity</span>
                                <input type="range" min="0" max="100" defaultValue="100" className="range range-xs range-primary w-24" />
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/5"></div>

                    {/* Section: Typography */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                            <Type size={12} /> Typography
                        </h4>
                        <div className="flex flex-col gap-3">
                            <textarea
                                className="textarea bg-black/20 border-white/5 text-sm w-full h-20 resize-none focus:outline-none focus:border-white/20"
                                placeholder="Node content..."
                                defaultValue="User logs in"
                            ></textarea>

                            <div className="flex gap-2">
                                <select className="select select-sm select-ghost bg-black/20 w-full text-xs font-normal border-white/5 focus:outline-none">
                                    <option>Inter</option>
                                    <option>Roboto</option>
                                    <option>Mono</option>
                                </select>
                                <select className="select select-sm select-ghost bg-black/20 w-24 text-xs font-normal border-white/5 focus:outline-none">
                                    <option>14px</option>
                                    <option>16px</option>
                                    <option>20px</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Actions */}
                <div className="mt-auto p-5 border-t border-white/10">
                    <button className="btn btn-primary btn-sm w-full rounded-lg normal-case font-medium">
                        Export as PNG
                    </button>
                </div>

            </aside>
        </div>
    );
}

export default Workspace;