import React from 'react';
import { Trash2 } from 'lucide-react';
import './VehicleTable.css';

const vehicles = [
  {
    id: 1,
    photo: '🚗',
    name: 'Toyota',
    type: 'Sedan',
    seats: 5,
    gearType: 'Automatic',
    ac: true,
    ratePerDay: 'Rs 3,000',
    carNumber: 'BA 1 JA 2023',
    phoneNumber: '+977 9876543210',
    bookingType: 'Daily',
    bookingDate: '2024-05-01',
    driverName: 'John Doe',
    status: 'Available',
    location: 'Kathmandu',
  },
  // Add more vehicles with the same structure
  {
    id: 2,
    photo: '🚙',
    name: 'Honda',
    type: 'SUV',
    seats: 7,
    gearType: 'Manual',
    ac: true,
    ratePerDay: 'Rs 4,000',
    carNumber: 'BA 2 JA 2023',
    phoneNumber: '+977 9876543211',
    bookingType: 'Weekly',
    bookingDate: '2024-05-02',
    driverName: 'Jane Smith',
    status: 'Booked',
    location: 'Pokhara',
  },
  // Add more vehicle entries as needed
];

const columnHeadings = [
  'Photo',
  'Name',
  'Type',
  'Seats',
  'Gear-Type',
  'AC',
  'Rate/Day',
  'Car Number',
  'Phone Number',
  'Booking Type',
  'Booking Date',
  'Driver Name',
  'Status',
  'Location',
  'Actions'
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
                    <span className="car-emoji">{vehicle.photo}</span>
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
                <td className="table-cell">
                  <div className="cell-content">{vehicle.carNumber}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.phoneNumber}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.bookingType}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.bookingDate}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.driverName}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.status}</div>
                </td>
                <td className="table-cell">
                  <div className="cell-content">{vehicle.location}</div>
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