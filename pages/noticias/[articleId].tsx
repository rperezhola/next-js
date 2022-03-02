import {getFeed} from "../../lib/rss";
import Image from "next/image";

interface Props {
    item: any,
}

interface StaticProps {
    params: any,
}

export default function Article({ item }: Props) {
    return (
        <div className="px-6 py-12 max-w-xl mx-auto">
            {item && <div>
                {item.enclosure?.url && <Image
                    src={item.enclosure?.url}
                    width={640}
                    height={384}
                    priority
                />}
                <h1 className="font-bold text-5xl mb-12">{item.title}</h1>
                <div>{item.pubDate}</div>
            </div>
            }
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{ params : { articleId: '0'}}, { params : { articleId: '1'}}],
        fallback: true,
    };
}

export async function getStaticProps({ params }: StaticProps) {
    const detailedFeed = await getFeed('https://www.hola.com/rss.xml');
    const realItem = await detailedFeed.items[params.articleId];

    return {
        props: {
            item: realItem,
        },
        revalidate: 10,
    };
}
