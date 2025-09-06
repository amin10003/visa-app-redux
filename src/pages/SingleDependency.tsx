import React, {useState, useEffect} from "react";


interface Person {
    firstName: string;
    lastName: string;
    email: string;
}

const Person: Person = {
    firstName: "John",
    lastName: "Doe",
    email: "maxamed@Gmail.com"
};

const SingleDependency: React.FC = () => {
    const [ name, setName] = useState("");


    useEffect(() => {
        console.log ("name changed to: ", name);
    }, [name]); // This effect runs only when 'name' changes

    function joinNames(firstName: string, lastName: string): void {
        console.log(firstName + " " + lastName);
    }
        joinNames("Mohamed", "Hussein");
       


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 text-center border-b-2 border-blue-200 m-auto">
            <h2 className="text-center text-2xl">Single Dependency Example</h2>
            <br />
            <p><b>Name:</b> <input value={name} onChange={(e) => setName(e.target.value)} /></p>
            <br />

            <span><b>Fullname:</b> {Person.firstName}  {Person.lastName}</span> <span><b>Email: </b>{Person.email}</span>
            
        </div>
    );
};


export default SingleDependency;  