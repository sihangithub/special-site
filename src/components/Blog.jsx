import { useState } from 'react'

export default function Blog() {
    const [selectedTag, setSelectedTag] = useState('all');
    
    const blogPosts = [
        {
            title: "My Journey in Tech",
            date: "2024-02-11",
            tags: ["tech", "personal"],
            preview: "Exploring the fascinating world of web development and the challenges I've faced..."
        },
        {
            title: "Building Interactive UIs",
            date: "2024-02-10",
            tags: ["tech", "react"],
            preview: "Creating engaging user interfaces with React and modern animation techniques..."
        },
        {
            title: "Design Philosophy",
            date: "2024-02-09",
            tags: ["design", "thoughts"],
            preview: "Thoughts on minimalism, user experience, and the beauty of simplicity in design..."
        }
    ];

    const tags = ['all', 'tech', 'design', 'personal', 'react', 'thoughts'];

    const filteredPosts = selectedTag === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.tags.includes(selectedTag));

    return (
        <div className="w-screen min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-mono mb-8 text-center">Blog</h1>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-2 rounded-full font-mono text-sm transition-all
                                ${selectedTag === tag 
                                    ? 'bg-violet-500 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>

                {/* Blog Posts */}
                <div className="space-y-8">
                    {filteredPosts.map((post, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-mono">{post.title}</h2>
                                <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                            <p className="text-gray-600 mb-4">{post.preview}</p>
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span 
                                        key={tag}
                                        className="text-sm text-violet-500 bg-violet-50 px-2 py-1 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
