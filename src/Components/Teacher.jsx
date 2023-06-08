import React from 'react';
import instructor from '../hooks/Instructor';

const Teacher = () => {
    const [teacher] = instructor()
    return (
        <div>
            <h1>{teacher.length}</h1>
        </div>
    );
};

export default Teacher;