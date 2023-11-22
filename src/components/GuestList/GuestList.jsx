import axios from 'axios';
import Guest from '../Guest/Guest.jsx';

function GuestList( {guestList, getGuests} ) {

    function removeGuest(guestIdFromRow) {
        let guestId = guestIdFromRow;
        console.log('guest Id:', guestId);
        axios({
            method: 'DELETE',
            url: `/guests/${guestId}`
        }).then(response => {
            console.log('guest deleted successfully:', response.data);
            getGuests();
        }).catch(error => {
            console.error('Error deleting guest:', error);
            // alert('Error deleteing guest. Please try again later.');
        });
    };

    return (
        <>
            <h2>Guest List</h2>
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Kid's Meal</th>
                </tr>
            </thead>
            <tbody>
                {guestList.map(guest => (
                <Guest guest={guest} removeGuest={removeGuest} />
                ))}
            </tbody>
            </table>
        </> 
    )
}

export default GuestList;