import {
    LayoutGrid,
    Folder,
    Settings,
    LogOut,
    Plus,
    Search,
    Bell,
    MoreVertical,
    ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="min-h-screen font-sans text-black bg-[#342F2F] overflow-hidden">

            <div className="drawer drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col h-screen py-2 pr-2">

                    <div className="bg-gray-50 w-full h-full rounded-3xl shadow-2xl overflow-y-auto relative flex flex-col">

                        {/* Navbar interne */}
                        <nav className="navbar w-full bg-white/80 backdrop-blur-md sticky top-0 z-20 px-8 py-4 border-b border-gray-100">
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold text-[#342F2F]">Dashboard</h1>
                            </div>
                            <div className="flex-none gap-4">
                                {/* Search Bar Style LP */}
                                <div className="hidden md:flex relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search workspace..."
                                        className="input input-sm h-10 bg-gray-100 pl-10 rounded-full w-64 focus:outline-none focus:bg-white border border-transparent focus:border-gray-200 transition-all"
                                    />
                                </div>

                            </div>
                        </nav>

                        {/* Page Content */}
                        <div className="p-8 md:p-12">

                            {/* Section Header */}
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#342F2F] mb-2">My Workspaces</h2>
                                    <p className="text-gray-500">Manage your projects and diagrams.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="btn bg-white border border-gray-200 text-black hover:bg-gray-50 rounded-full normal-case shadow-sm">
                                        Recent
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                <Link to="/Workspace/1" className="group relative bg-[#342F2F] p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <button className="btn btn-ghost btn-xs btn-circle">
                                            <MoreVertical className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">Marketing Campaign</h3>
                                    <p className="text-gray-400 text-sm mb-6">Edited 2 hours ago</p>

                                    <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative flex items-center justify-center">
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                                        <span className="text-xs font-mono text-gray-400">Preview Mode</span>
                                    </div>
                                </Link>

                                <Link to="/Workspace/2" className="group relative bg-[#342F2F] p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <button className="btn btn-ghost btn-xs btn-circle text-white/50 hover:text-white">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">SaaS Architecture</h3>
                                    <p className="text-gray-400 text-sm mb-6">Edited 1 day ago</p>

                                    <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative flex items-center justify-center">
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                                        <span className="text-xs font-mono text-gray-400">Preview Mode</span>
                                    </div>
                                </Link>

                                <Link to="/Workspace/new" className="group flex flex-col items-center justify-center h-full min-h-70 bg-[#342F2F] border-2 border-dashed border-gray-300 rounded-3xl hover:bg-white hover:border-[#342F2F] hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                                        <Plus className="w-8 h-8 text-[#342F2F] hover:bg-^" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#342F2F] transition-colors">Create New Workspace</h3>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col bg-[#342F2F] w-72 text-white p-6">

                        {/* Logo Area */}
                        <div className="flex items-center gap-3 px-2 mb-10">
                            <div className="w-8 h-8 rounded-lg p-1 border border-white/20">
                                <img src="/tt.png" alt="Synapse Logo" />
                            </div>
                            <span className="font-bold text-xl tracking-wide">Synapse</span>
                        </div>

                        {/* Sidebar Menu */}
                        <ul className="menu w-full p-0 gap-2">
                            <li>
                                <a className="flex gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 active:bg-white/20">
                                    <LayoutGrid className="w-5 h-5" />
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a className="flex gap-3 px-4 py-3 rounded-xl text-gray-400 font-medium hover:bg-white/5 hover:text-white transition-colors">
                                    <Folder className="w-5 h-5" />
                                    Projects
                                </a>
                            </li>

                            {/* Submenu Example Styled */}
                            <li>
                                <details>
                                    <summary className="px-4 py-3 text-gray-400 font-medium hover:bg-white/5 hover:text-white rounded-xl">
                                        <div className="flex gap-3 items-center">
                                            <Settings className="w-5 h-5" />
                                            Settings
                                        </div>
                                    </summary>
                                    <ul className="before:bg-gray-600">
                                        <li><a className="text-gray-400 hover:text-white">Profile</a></li>
                                        <li><a className="text-gray-400 hover:text-white">Billing</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>

                        {/* Bottom User Profile */}
                        <div className="mt-auto pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                                <div className="avatar">
                                    <div className="w-10 rounded-full border border-white/10 group-hover:border-white/50 transition-colors">
                                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="profile" />
                                    </div>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-bold text-sm text-white truncate">Username</span>
                                    <span className="text-xs text-gray-500 truncate">Free Plan</span>
                                </div>
                                <LogOut className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;