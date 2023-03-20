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
        <section className='flex h-80 w-full justify-center items-center gap-4'>
            {skills.map((data) => (
                <p className='bg-blue-500 h-max p-4 rounded-md text-white font-bold'>{data}</p>
            ))}
        </section>
    );
}
