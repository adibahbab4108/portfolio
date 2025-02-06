
// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title="", subtitle="" }) => {
    return (
        <div className="pt-20 pb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold py-3
            bg-gradient-to-r from-purple-600 from-40% to-white to-70%
            bg-clip-text text-transparent">{title}</h1>
            <p className="text-gray-400 mt-4 text-lg font-bold max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionTitle;