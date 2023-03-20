import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setStatusData, setOriginalLaunchData, setTypeData } from '../../redux/capsuleSlice';

export function SearchSection() {
    const [status, setStatus] = useState('active');
    const [originalLaunch, setOriginalLaunch] = useState(new Date());
    const [type, setType] = useState('');
    const { _id } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    function handleStatusChange(e) {
        setStatus(e.target.value);
    }

    function handleTypeChange(e) {
        setType(e.target.value);
    }

    async function handleSearchByStatus(e) {
        e.preventDefault();

        const res = await axios.get(`/api/capsules/status/${_id}?status=${status}`);

        console.log({ res });

        dispatch(setStatusData(res.data));
    }

    async function handleSearchByOriginalLaunch(e) {
        e.preventDefault();

        const res = await axios.get(
            `/api/capsules/originalLaunch/${_id}?original_launch=${originalLaunch}`,
        );

        console.log({ res });

        dispatch(setOriginalLaunchData(res.data));
    }

    async function handleSearchByType(e) {
        e.preventDefault();

        const res = await axios.get(`/api/capsules/type/${_id}?type=${type}`);

        console.log({ res });

        dispatch(setTypeData(res.data));
    }

    const formClass = 'flex flex-col justify-center text-center pt-12 gap-8';

    return (
        <section className='flex flex-col justify-center items-center bg-red-50'>
            <h3 className='text-lg'>Search Capsules</h3>
            <div className='flex w-full justify-evenly'>
                <form className={formClass} onSubmit={handleSearchByStatus}>
                    <label for='status'>By status</label>
                    <select
                        value={status}
                        name='status'
                        id='status'
                        form='statusform'
                        onChange={handleStatusChange}
                    >
                        <option value='active'>Active</option>
                        <option value='retired'>Retired</option>
                    </select>

                    <button type='submit'>Submit</button>
                </form>

                <form className={formClass} onSubmit={handleSearchByOriginalLaunch}>
                    <label for='originalLaunch'>By Original Launch</label>
                    <DateTimePicker value={originalLaunch} onChange={setOriginalLaunch} />

                    <button type='submit'>Submit</button>
                </form>

                <form className={formClass} onSubmit={handleSearchByType}>
                    <label for='type'>By type</label>
                    <input
                        placeholder='Dragon 1.1'
                        value={type}
                        name='type'
                        id='type'
                        onChange={handleTypeChange}
                    />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    );
}
