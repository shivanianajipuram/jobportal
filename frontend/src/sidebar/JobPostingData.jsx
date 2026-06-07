import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const JobPostingData = ({ handleChange }) => {
    const now = new Date();

    const twentfourhoursago = new Date(now - 24 * 60 * 60 * 1000);
    const sevendaysago = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirthyDaysago = new Date(now - 30 * 24 * 60 * 60 * 1000);

    // convert date to string
    const twentfourhoursagoStr = twentfourhoursago.toISOString().slice(0, 10);
    const sevendaysagoStr = sevendaysago.toISOString().slice(0, 10);
    const thirthyDaysagoStr = thirthyDaysago.toISOString().slice(0, 10);

    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Date Of Posting</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input
                        type="radio"
                        name="test"
                        value=""
                        onChange={handleChange}
                    />
                    <span className='checkmark'></span>
                    All
                </label>

                <InputField
                    handleChange={handleChange}
                    value={twentfourhoursagoStr}
                    title="Last 24 hours"
                    name="test2"
                />

                <InputField
                    handleChange={handleChange}
                    value={sevendaysagoStr}
                    title="Last 7 Days"
                    name="test2"
                />

                <InputField
                    handleChange={handleChange}
                    value={thirthyDaysagoStr}
                    title="Last Month"
                    name="test2"
                />
            </div>
        </div>
    )
}

export default JobPostingData