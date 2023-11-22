
function Guest ( {guest, removeGuest} ) {

    return(
    <tr key={guest.id}>
        <td>{guest.name}</td>
        <td>{String(guest.kidsMeal)}</td> 
        <td>
            <button onClick={() => removeGuest(guest.id)}>
                Remove Guest
            </button>
        </td>
    </tr>)
}

export default Guest;