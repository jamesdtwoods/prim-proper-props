import axios from 'axios';

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
                <tr key={guest.id}>
                    <td>{guest.name}</td>
                    <td>{String(guest.kidsMeal)}</td> 
                    <td>
                        <button onClick={() => removeGuest(guest.id)}>
                            Remove Guest
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </> 
    )
}

export default GuestList;