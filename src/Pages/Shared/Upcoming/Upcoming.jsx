import Countdown from "../../Home/Others/Discount/Countdown";

const Upcoming = () => {
    const targetDate = new Date('2023-07-01T12:00:00');
    return (
        <div className="text-6xl font-bold text-center text-gray-800 my-20 space-y-5">
            <h2 className="text-black text-4xl">Upcoming Features...</h2>
            <Countdown  targetDate={targetDate} />
        </div>
    );
};

export default Upcoming;