'use client'
import React, { useState } from 'react';

const supaBase = require('../../lib/supabase');

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [dept, setDept] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState('');
  const [dateJoined, setDateJoined] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (designation.length < 6) {
      alert('Designation must be at least 6 characters long.');
      return;
    }
    
    if (dept.length < 6) {
      alert('Department must be at least 6 characters long.');
      return;
    }
    
    const currentDate = new Date().toISOString().split('T')[0];
    if (dateJoined > currentDate) {
      alert('Date Joined cannot be in the future.');
      return;
    } else if (dateJoined < currentDate) {
      setDateJoined('Yet to be joined');
    }

    const { data, error } = await supaBase
      .from('employee')
      .insert([{ name, dept, designation, salary, address, date_joined: dateJoined }]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
      
      setName('');
      setDept('');
      setDesignation('');
      setSalary('');
      setAddress('');
      setDateJoined('');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Department:</label>
          <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} />
        </div>
        <div>
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
        <div>
          <label>Salary:</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label>Date Joined:</label>
          <input type="date" value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;





// 'use client'
// import React, { useState } from 'react';

// const supaBase = require('../../lib/supabase');

// const EmployeeForm = () => {
//   const [name, setName] = useState('');
//   const [dept, setDept] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [salary, setSalary] = useState('');
//   const [address, setAddress] = useState('');
//   const [dateJoined, setDateJoined] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // You can perform form validation here if needed
//     const { data, error } = await supaBase
//       .from('employee')
//       .insert([{ name, dept, designation, salary, address, date_joined: dateJoined }]);

//     if (error) {
//       console.error('Error inserting data:', error.message);
//     } else {
//       console.log('Data inserted successfully:', data);
      
//       setName('');
//       setDept('');
//       setDesignation('');
//       setSalary('');
//       setAddress('');
//       setDateJoined('');
//     }
//   };

//   return (
//     <div className='form-container'>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Department:</label>
//           <input type="text" value={dept} onChange={(e) => setDept(e.target.value)} />
//         </div>
//         <div>
//           <label>Designation:</label>
//           <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
//         </div>
//         <div>
//           <label>Salary:</label>
//           <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//         </div>
//         <div>
//           <label>Date Joined:</label>
//           <input type="date" value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default EmployeeForm;
