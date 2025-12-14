import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* 404 Content */}
            <div className="relative text-center max-w-2xl mx-auto">
                {/* 404 Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <AlertCircle className="w-32 h-32 text-yellow-400 animate-bounce" />
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
                            404
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                    Oops!
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-indigo-200 mb-6">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-xl text-indigo-100 mb-8 max-w-lg mx-auto">
                    Looks like you've ventured into uncharted territory! This page doesn't exist in our learning universe.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <Search className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Fun fact */}
                <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <p className="text-indigo-100 text-sm">
                        💡 <strong>Did you know?</strong> Error 404 means "Not Found" - it's one of the most famous HTTP status codes!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
