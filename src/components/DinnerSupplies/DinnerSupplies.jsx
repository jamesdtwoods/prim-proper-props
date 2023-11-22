import SilverWare from '../SilverWare/SilverWare.jsx';

function DinnerSupplies ( {guestList} ) {
    let count = (guestList.length *2);
    return (
        <>
            <h2>Dinner Supplies</h2>
            <div>
                <SilverWare name='Spoons' count={count} />
            </div>
            <div>
                <SilverWare name='Forks' count={count} />
            </div>
            <div>
                <SilverWare name='Knives' count={count} />
            </div>
        </>
    )
}

export default DinnerSupplies;