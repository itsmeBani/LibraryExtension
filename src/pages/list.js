import React from 'react';

const subjects = [
    {
        name: "Mathematics",
        description: "Study of numbers, shapes, and patterns.",
        credits: 3
    },
    {
        name: "Physics",
        description: "Study of matter, motion, and energy.",
        credits: 4
    },
    {
        name: "Chemistry",
        description: "Study of substances and their properties.",
        credits: 3
    },
    {
        name: "Biology",
        description: "Study of living organisms.",
        credits: 4
    },
    {
        name: "History",
        description: "Study of past events.",
        credits: 3
    },
    {
        name: "Literature",
        description: "Study of written works.",
        credits: 2
    },
    {
        name: "Computer Science",
        description: "Study of computational systems.",
        credits: 4
    },
    {
        name: "Art",
        description: "Study of visual and performing arts.",
        credits: 2
    },
    {
        name: "Economics",
        description: "Study of production, consumption, and transfer of wealth.",
        credits: 3
    },
    {
        name: "Philosophy",
        description: "Study of fundamental questions about existence, knowledge, and ethics.",
        credits: 3
    }
];

const List = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-xl">
            <ul className="space-y-4">
                {subjects.map((subject, index) => (
                    <li key={index} className="p-4 border rounded-lg bg-gray-50">
                        <p className="font-medium text-lg text-blue-gray-900">
                            {subject.name}
                        </p>
                        <p className="text-gray-700">{subject.description}</p>
                        <p className="text-gray-500">Credits: {subject.credits}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
