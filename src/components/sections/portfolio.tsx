import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "Uni-plastique Projects",
    image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?w=800",
    category: "2015-2016",
  },
  {
    title: "DIAW DESIGN DECO Projects",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    category: "2018-2020",
  },
  {
    title: "CSE Projects",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
    category: "2020-2022",
  },
  {
    title: "DIMA Projects",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    category: "2023-2024",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projets Réalisés
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Découvrez nos derniers projets électriques et solutions innovantes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500 brightness-75 group-hover:brightness-100"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-orange-500 text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
