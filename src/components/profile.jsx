import React, { useState } from 'react';
import ProfilePhoto from "../assets/images/maker.webp";

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [birthdayValid, setBirthdayValid] = useState(true);
    const [addressValid, setAddressValid] = useState(true);
    const [countryValid, setCountryValid] = useState(true);
    const [stateValid, setStateValid] = useState(true);
    const [cityValid, setCityValid] = useState(true);
    const [zipValid, setZipValid] = useState(true);

    // Function to validate first name
    const validateFirstName = () => {
        const isValidFirstName = /^[a-zA-Z]+$/;
        setFirstNameValid(isValidFirstName.test(firstName));
    };

    // Function to validate last name
    const validateLastName = () => {
        const isValidLastName = /^[a-zA-Z]+$/;
        setLastNameValid(isValidLastName.test(lastName));
    };

    // Function to validate phone number
    const validatePhone = () => {
        const isValidPhone = /^\d+$/;
        setPhoneValid(isValidPhone.test(phone));
    };

    // Function to validate birthday format
    const validateBirthday = () => {
        // Regular expression to validate date format dd/mm/yyyy
        const isValidDate = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
        setBirthdayValid(isValidDate.test(birthday));
    };

    // Function to validate address is not empty
    const validateAddress = () => {
        setAddressValid(address.trim() !== '');
    };

    // Function to validate country is selected
    const validateCountry = () => {
        setCountryValid(country.trim() !== '');
    };

    // Function to validate state is selected
    const validateState = () => {
        setStateValid(state.trim() !== '');
    };

    // Function to validate city is selected
    const validateCity = () => {
        setCityValid(city.trim() !== '');
    };

    // Function to validate zip contains only digits
    const validateZip = () => {
        const isValidZip = /^\d+$/;
        setZipValid(isValidZip.test(zip));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate all fields
        validateFirstName();
        validateLastName();
        validatePhone();
        validateBirthday();
        validateAddress();
        validateCountry();
        validateState();
        validateCity();
        validateZip();
        // Submit if all fields are valid
        if (firstNameValid && lastNameValid && phoneValid && birthdayValid && addressValid && countryValid && stateValid && cityValid && zipValid) {
            // Perform form submission
            console.log("Form submitted successfully!");
        } else {
            // Handle invalid form submission
            console.log("Form submission failed. Please check the form for errors.");
        }
    };

    return (
        <div className="col-lg-9 col-md-8 w-75 mt-5 m-auto">
            <div className="mb-4">
                <h1 className="mb-0 h3">Profile</h1>
            </div>
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-lg-5">
                    <div className="mb-5">
                        <h4 className="mb-1">Profile Picture</h4>
                        <p className="mb-0 fs-6">Upload a picture to make your profile stand out and let people recognize your comments and contributions easily!</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={ProfilePhoto} height={70} width={70} alt="avatar" className="avatar avatar-lg rounded-circle" />
                        <div className="ms-4">
                            <h5 className="mb-0">Your photo</h5>
                            <small>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 4 MB</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-lg-5">
                    <div className="mb-5">
                        <h4 className="mb-1">Account Information</h4>
                        <p className="mb-0 fs-6">Edit your personal information and address.</p>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                        <div className="col-lg-6 col-md-12">
                            <label htmlFor="profileFirstNameInput" className="form-label">First Name</label>
                            <input type="text" className={`form-control ${firstNameValid ? '' : 'border border-danger'}`} id="profileFirstNameInput"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                onBlur={validateFirstName} required />
                            {!firstNameValid && <div className="text-danger">Invalid First Name.</div>}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <label htmlFor="profileLastNameInput" className="form-label">Last Name</label>
                            <input type="text" className={`form-control ${lastNameValid ? '' : 'border border-danger'}`} id="profileLastNameInput"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                onBlur={validateLastName} required />
                            {!lastNameValid && <div className="text-danger">Invalid Last Name.</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="profilePhoneInput" className="form-label">Phone</label>
                            <input type="text" className={`form-control ${phoneValid ? '' : 'border border-danger'}`} id="profilePhoneInput"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onBlur={validatePhone} placeholder="+91 XXXXXXX664" required />
                            {!phoneValid && <div className="text-danger">Invalid Phone Number.</div>}
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="profileBirthdayInput" className="form-label">Birthday</label>
                            <input type="text" className={`form-control ${birthdayValid ? '' : 'border border-danger'}`} id="profileBirthdayInput"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                onBlur={validateBirthday} placeholder="dd/mm/yyyy" required />
                            {!birthdayValid && <div className="text-danger">Invalid Birthday (dd/mm/yyyy).</div>}
                        </div>
                        <div className="col-lg-12">
                            <label htmlFor="profileAddressInput" className="form-label">Address Line</label>
                            <input type="text" className={`form-control ${addressValid ? '' : 'border border-danger'}`} id="profileAddressInput"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={validateAddress} required />
                            {!addressValid && <div className="text-danger">Please enter address.</div>}
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="profileCountryInput" className="form-label">Country</label>
                            <select className={`form-select ${countryValid ? '' : 'border border-danger'}`} id="profileCountryInput"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                onBlur={validateCountry} required>
                                <option selected disabled value="">Choose...</option>
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                                <option value="Canada">Canada</option>
                                <option value="Germany">Germany</option>
                            </select>
                            {!countryValid && <div className="text-danger">Please select country.</div>}
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="profileStateInput" className="form-label">State / Region</label>
                            <select className={`form-select ${stateValid ? '' : 'border border-danger'}`} id="profileStateInput"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                onBlur={validateState} required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Goa">Goa</option>
                                <option value="Maharashtra">Maharashtra</option>
                            </select>
                            {!stateValid && <div className="text-danger">Please select state / region.</div>}
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="profileCityInput" className="form-label">City</label>
                            <select className={`form-select ${cityValid ? '' : 'border border-danger'}`} id="profileCityInput"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                onBlur={validateCity} required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Surat">Surat</option>
                                <option value="Vapi">Vapi</option>
                                <option value="Rajkot">Rajkot</option>
                            </select>
                            {!cityValid && <div className="text-danger">Please select a city.</div>}
                        </div>
                        <div className="col-lg-3">
                            <label htmlFor="profileZipInput" className="form-label">Zip/Code</label>
                            <input type="text" className={`form-control ${zipValid ? '' : 'border border-danger'}`} id="profileZipInput"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                onBlur={validateZip} required />
                            {!zipValid && <div className="text-danger">Invalid Zip/Code .</div>}
                        </div>
                        <div className="col-12 mt-4">
                            <button className="btn btn-primary me-2" type="submit">Save Changes</button>
                            <button className="btn btn-light" type="button">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
