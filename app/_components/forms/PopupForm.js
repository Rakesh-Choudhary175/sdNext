function PopupForm() {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Schedule Your Appointment Today!</h2>

        <form id="popupForm">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name:"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            required
          />

          <input type="text" name="phone" placeholder="phone" required />

          <button type="submit">I want to Schedule!</button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
