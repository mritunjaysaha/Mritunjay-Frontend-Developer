import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function DataGrid() {
    const { status, originalLaunch, type } = useSelector((state) => state.capsule);

    const [data, setData] = useState([]);

    useEffect(() => {
        if (status.length) {
            setData(status);
        } else if (originalLaunch.length) {
            setData(originalLaunch);
        } else if (type.length) {
            setData(type);
        }
    }, [status, originalLaunch, type]);

    return (
        <section className='flex pb-20 px-20 gap-4'>
            {data.map(
                (
                    {
                        capsule_id,
                        capsule_serial,
                        status,
                        original_launch,
                        landings,
                        type,
                        details,
                    },
                    index,
                ) => {
                    return (
                        <article key={index} className='w-60'>
                            <p>id: {capsule_id}</p>
                            <p>serial: {capsule_serial}</p>
                            <p>status: {status}</p>
                            <p>original_launch: {new Date(original_launch).toLocaleDateString()}</p>
                            <p>landings: {landings}</p>
                            <p>type: {type}</p>
                            <p>details: {details}</p>
                        </article>
                    );
                },
            )}
        </section>
    );
}
