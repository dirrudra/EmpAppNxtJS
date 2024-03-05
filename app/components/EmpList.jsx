'use client'
import { useEffect, useState } from 'react';

const supabase = require('../../lib/supabase');

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const { data, error } = await supabase.from('employee').select('*');
      if (error) {
        throw error;
      }
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log('Editing employee with id:', id);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('employee').delete().eq('id', id);
      if (error) {
        throw error;
      }
      console.log('Employee deleted successfully');
      // After deleting, fetch updated list of employees
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error.message);
    }
  };

  return (
    <div className='employee-list'>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Date Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.dept}</td>
              <td>{employee.designation}</td>
              <td>{employee.salary}</td>
              <td>{employee.address}</td>
              <td>{employee.date_joined}</td>
              <td>
                <button onClick={() => handleEdit(employee.id)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
