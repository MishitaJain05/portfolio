const ProjectCard = ({ title, description, imgUrl, link }) => (
  <div className="bg-gradient-to-br from-[#232526] to-[#151515] rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300">
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
      />
    </a>
    <h3 className="text-2xl font-bold text-white mb-2 text-center">{title}</h3>
    <p className="text-[#B8B8B8] text-base text-center">{description}</p>
  </div>
);

export default ProjectCard;
