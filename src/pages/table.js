import React from 'react';

const people = [
    {
        Lastname: "Smith",
        Firstname: "John",
        Address: "123 Main St, Springfield, IL",
        Age: 28
    },
    {
        Lastname: "Doe",
        Firstname: "Jane",
        Address: "456 Elm St, Springfield, IL",
        Age: 34
    },
    {
        Lastname: "Brown",
        Firstname: "James",
        Address: "789 Oak St, Springfield, IL",
        Age: 45
    },
    {
        Lastname: "Johnson",
        Firstname: "Emily",
        Address: "101 Maple St, Springfield, IL",
        Age: 25
    },
    {
        Lastname: "Williams",
        Firstname: "Michael",
        Address: "202 Pine St, Springfield, IL",
        Age: 37
    },
    {
        Lastname: "Jones",
        Firstname: "Sarah",
        Address: "303 Birch St, Springfield, IL",
        Age: 29
    },
    {
        Lastname: "Miller",
        Firstname: "David",
        Address: "404 Cedar St, Springfield, IL",
        Age: 52
    },
    {
        Lastname: "Wilson",
        Firstname: "Laura",
        Address: "505 Walnut St, Springfield, IL",
        Age: 40
    },
    {
        Lastname: "Taylor",
        Firstname: "Daniel",
        Address: "606 Ash St, Springfield, IL",
        Age: 33
    },
    {
        Lastname: "Anderson",
        Firstname: "Linda",
        Address: "707 Fir St, Springfield, IL",
        Age: 27
    }
];

const Table = () => {
    return (
        <div className="relative p-10 flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">
                <thead>
                <tr>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Lastname
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Firstname
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Address
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                            Age
                        </p>
                    </th>
                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                    </th>
                </tr>
                </thead>
                <tbody>
                {people.map((person, index) => (
                    <tr key={index}>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {person.Lastname}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {person.Firstname}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {person.Address}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {person.Age}
                            </p>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
