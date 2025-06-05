import React, { useState } from 'react';

export default function RegistrationForm({ onSwitchView }) {
    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        othername: '',
        dob: '',
        age: '',
        sex: '',
        tel: '',
        occupation: '',
        nationalId: '',
        nextOfKin: '',
        relationship: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!formData.firstname) {
            newErrors.firstname = 'First name is required';
            valid = false;
        }
        if (!formData.secondname) {
            newErrors.secondname = 'Second name is required';
            valid = false;
        }
        if (!formData.dob) {
            newErrors.dob = 'Date of birth is required';
            valid = false;
        }
        if (!formData.age) {
            newErrors.age = 'Age is required';
            valid = false;
        } else if (isNaN(formData.age) || formData.age <= 0) {
            newErrors.age = 'Age must be a positive number';
            valid = false;
        }
        if (!formData.sex) {
            newErrors.sex = 'Sex is required';
            valid = false;
        }
        if (!formData.tel) {
            newErrors.tel = 'Telephone number is required';
            valid = false;
        }
        if (!formData.occupation) {
            newErrors.occupation = 'Occupation is required';
            valid = false;
        }
        if (!formData.nationalId) {
            newErrors.nationalId = 'National ID is required';
            valid = false;
        }
        if (!formData.nextOfKin) {
            newErrors.nextOfKin = 'Next of kin is required';
            valid = false;
        }
        if (!formData.relationship) {
            newErrors.relationship = 'Relationship is required';
            valid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Registration data:', formData);
            alert('Registration successful!');
            setFormData({
                firstname: '',
                secondname: '',
                othername: '',
                dob: '',
                age: '',
                sex: '',
                tel: '',
                occupation: '',
                nationalId: '',
                nextOfKin: '',
                relationship: '',
                email: '',
            });
            setErrors({});
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name:</label>
                    <input
                        type="text"
                        id="firstname"
                        className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                    {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="secondname" className="form-label">Second Name:</label>
                    <input
                        type="text"
                        id="secondname"
                        className={`form-control ${errors.secondname ? 'is-invalid' : ''}`}
                        value={formData.secondname}
                        onChange={handleChange}
                        required
                    />
                    {errors.secondname && <div className="invalid-feedback">{errors.secondname}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="othername" className="form-label">Other Name:</label>
                    <input
                        type="text"
                        id="othername"
                        className="form-control"
                        value={formData.othername}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age:</label>
                    <input
                        type="number"
                        id="age"
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="0"
                    />
                    {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="sex" className="form-label">Sex:</label>
                    <select
                        id="sex"
                        className={`form-select ${errors.sex ? 'is-invalid' : ''}`}
                        value={formData.sex}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.sex && <div className="invalid-feedback">{errors.sex}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Telephone:</label>
                    <input
                        type="tel"
                        id="tel"
                        className={`form-control ${errors.tel ? 'is-invalid' : ''}`}
                        value={formData.tel}
                        onChange={handleChange}
                        required
                    />
                    {errors.tel && <div className="invalid-feedback">{errors.tel}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="occupation" className="form-label">Occupation:</label>
                    <input
                        type="text"
                        id="occupation"
                        className={`form-control ${errors.occupation ? 'is-invalid' : ''}`}
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                    />
                    {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="nationalId" className="form-label">National ID:</label>
                    <input
                        type="text"
                        id="nationalId"
                        className={`form-control ${errors.nationalId ? 'is-invalid' : ''}`}
                        value={formData.nationalId}
                        onChange={handleChange}
                        required
                    />
                    {errors.nationalId && <div className="invalid-feedback">{errors.nationalId}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="nextOfKin" className="form-label">Next of Kin:</label>
                    <input
                        type="text"
                        id="nextOfKin"
                        className={`form-control ${errors.nextOfKin ? 'is-invalid' : ''}`}
                        value={formData.nextOfKin}
                        onChange={handleChange}
                        required
                    />
                    {errors.nextOfKin && <div className="invalid-feedback">{errors.nextOfKin}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="relationship" className="form-label">Relationship:</label>
                    <input
                        type="text"
                        id="relationship"
                        className={`form-control ${errors.relationship ? 'is-invalid' : ''}`}
                        value={formData.relationship}
                        onChange={handleChange}
                        required
                    />
                    {errors.relationship && <div className="invalid-feedback">{errors.relationship}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
            </form>
            <div className="text-center">
                <p>Already registered? <button type="button" className="btn btn-link p-0" onClick={() => onSwitchView('login')}>Login here</button></p>
            </div>
        </div>
    );
}
