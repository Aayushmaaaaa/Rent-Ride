import React from 'react';
import { Trash2 } from 'lucide-react';
import './VehicleTable.css';

const vehicles = [
  { id: 1, name: 'Toyota', type: 'Sedan', seats: 5, gearType: 'Automatic', ac: true, ratePerDay: 'Rs 3,000' },
  { id: 2, name: 'Toyota', type: 'Sedan', seats: 5, gearType: 'Automatic', ac: true, ratePerDay: 'Rs 3,000' },
  { id: 3, name: 'Toyota', type: 'Sedan', seats: 5, gearType: 'Automatic', ac: true, ratePerDay: 'Rs 3,000' },
  { id: 4, name: 'Toyota', type: 'Sedan', seats: 5, gearType: 'Automatic', ac: true, ratePerDay: 'Rs 3,000' },
  { id: 5, name: 'Toyota', type: 'Sedan', seats: 5, gearType: 'Automatic', ac: true, ratePerDay: 'Rs 3,000' },
];

const columnHeadings = [
  'Photo',
  'Name',
  'Type',
  'Seats',
  'Gear-Type',
  'AC',
  'Rate/Day',
  'Actions',
];

const VehicleTable = () => {
  return (
    <div className="table-container">
      <div className="table-scroll">
        <table className="vehicle-table">
          <thead className="table-header">
            <tr>
              {columnHeadings.map((heading, index) => (
                <th key={index} scope="col">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table-body">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="table-cell">
                  <div className="car-photo">
                    <span className="car-emoji">🚗</span>
                  </div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.name}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.type}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.seats}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.gearType}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.ac ? 'Yes' : 'No'}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.ratePerDay}</div>
                </td>
                <td className="table-cell actions-cell">
                  <button className="delete-button">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleTable;