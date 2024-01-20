const BirthdayCard = ({ name, message, image }) => {
    return (
        <div className="birthday-card">
            <img src={image} alt="Birthday" />
            <h2>Happy Birthday {name}!</h2>
            <p>{message}</p>
        </div>
    );
};

export default BirthdayCard;