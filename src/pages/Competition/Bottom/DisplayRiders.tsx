import React from 'react';
import { useAppContext } from '../../../AppState';

function DisplayRiders() {
  const { storedNames, nextRider } = useAppContext();

  return (
    <div className='start-list-container'>
      <div className='title'>Riders List</div>
      <table className='start-list-table'>
        <tbody className='start-list-tbody'>
          {storedNames.map((rider, index) => (
            <tr
              key={index}
              style={{
                fontWeight: index === nextRider ? 'bold' : 'normal',
                color: rider.finished ? 'green' : 'inherit',
              }}
            >
              <td className='display-riders-name'>{index + 1}:</td>
              <td className='display-riders-name'>{rider.name}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayRiders;
