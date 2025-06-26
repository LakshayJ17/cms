import Image from "next/image";
import Link from "next/link";

const blogConfig = [
    {
        "title": " React Vs NextJs",
        "excerpt": "NextJs is ultimate framework ...",
        "image": "/thumbnail/next-v-react.png",
        "url": "/demo-slug"
    },
    {
        "title": "Dreams to be a Remote Developer ",
        "excerpt": "Get started ...",
        "image": "/thumbnail/dreams.png",
        "url": "/demo-slug"
    },
    {
        "title": " Become backend dev in 2025",
        "excerpt": "Lorem isum  ...",
        "image": "/thumbnail/remote-developer.png",
        "url": "/demo-slug"
    },
];

export default function Blogs() {
    return (
        <section className="grid grid-cols-2 mp:grid-cols-3 gap-4 p-8">
            {blogConfig.map((blog, index) => {
                return <BlogCard key={index} title={blog.title} excerpt={blog.excerpt} image={blog.image} url={blog.url} />
            })}
        </section>
    );
}

const BlogCard = ({ title, excerpt, image, url }) => {
    return <div className="bg-gray-600/20 rounded-lg border flex flex-col p-1 gap-1 hover:scale-[1.03] transition-all delay-100 duration-300">
        <Image className="w-full rounded-md" src={image} width={300} height={170} alt={title} />
        <h2 className="text-xl font-bold text-gray-200">{title}</h2>
        <p className="text-sm text-gray-400">{excerpt}</p>
        <Link className="bg-zinc-600/70 py-2 px-3 rounded w-fit text-xs" href={`/blog/${url}`}>Read More</Link>
    </div>
}