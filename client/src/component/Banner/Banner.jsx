export function Banner() {
    const skills = [
        'React.JS',
        'Next.JS',
        'MongoDB',
        'Express.JS',
        'Node.JS',
        'WebPack',
        'Tailwind CSS',
        'CSS3',
        'HTML5',
        'JavaScript',
        'SCSS',
    ];
    return (
        <section className='p-12'>
            <p className='mb-4 font-bold text-lg text-center'>Skills</p>

            <section className='flex p-12 lg:flex-row flex-col h-max md:h-80 w-full justify-center items-center gap-4'>
                {skills.map((data) => (
                    <p className='bg-blue-500 h-max p-4 rounded-md text-white font-bold'>{data}</p>
                ))}
            </section>
        </section>
    );
}
