import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";


export default function SingleBlog() {
    const tempTags = "SpaceX, Nasa, Exploration"

    const tempHtml = `
    <p>Demo content</p>`

    return (

        <section>
            <div className="flex flex-col gap-2 items-center">
                <Image className="rounded border w-[90%] md:w-[700px]" src="/thumbnail/dreams.png" height={250} width={500} alt="Page title" />
                <div className="meta-of-a-blog  space-y-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-gray-400 size-4" />
                        <p className="text-gray-400 text-xs">Created on : {dateFormat(new Date())}</p>
                    </div>

                    <div className="text-xs flex items-center gap-2">
                        <p>Category: </p>
                        <p className="badge border border-gray-700 w-fit px-2 py-1 rounded bg-gray-600/30">Space Exploration</p>
                    </div>

                    <div className="text-xs flex items-center gap-2">
                        <p>Tags: </p>
                        {tempTags.split(",").map(tag => <p className="badge border border-gray-700 w-fit px-2 py-1 rounded bg-gray-600/30">{tag}</p>)}
                    </div>

                    {/* <div className="content" dangerouslySetInnerHTML={{__html :  tempHtml}}></div> */}
                </div>
                <p className="mt-2 text-sm w-[90%] md:w-2/3 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa natus ipsam commodi minima. Magnam ipsa necessitatibus totam sunt, voluptatibus et, nostrum dicta possimus, quo odio reiciendis doloribus sapiente quibusdam ut hic unde. Cupiditate vel perferendis qui fuga similique a, repudiandae facilis architecto, enim possimus ducimus nulla harum incidunt. Dignissimos, placeat. At vero fugit obcaecati temporibus, ad suscipit ipsum, placeat blanditiis, quos mollitia tempore saepe possimus hic aliquam eligendi alias nulla! Asperiores sit doloremque ipsa maiores explicabo fuga porro dolorem magnam assumenda magni. Tempora eum quibusdam vitae vel quam alias esse, minus consectetur est necessitatibus ex nesciunt nihil eligendi, molestiae quasi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, cupiditate, libero fugiat unde quod repellat quas, eius delectus a velit ipsam repellendus qui quibusdam architecto quidem sed reiciendis officia doloremque corporis. Consequatur perspiciatis beatae voluptates asperiores. Doloremque laboriosam corporis repellendus placeat dolorum. Assumenda recusandae impedit labore quae, quidem minus ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae repellat distinctio suscipit! Eaque ullam nostrum explicabo!</p>
            </div>
        </section>

    )
}