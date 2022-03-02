import ContentLink from "../components/ContentLink";
import styled from "styled-components";
import Head from 'next/head';
import { getFeed } from "../lib/rss";
import { Key } from "react";

export const MainFlow = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      width: 48%;
    }
  }
`;

export async function getStaticProps({}) {
    const detailedFeed = await getFeed('https://www.hola.com/rss.xml');

    return {
        props: {
            items: detailedFeed.items,
        },
        revalidate: 10,
    };
}

interface Props {
    items: any,
}

interface Feed {
    title: string,
    enclosure: { url: string | undefined; }
}

export default function Home({items}: Props) {
    return <>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Festive&family=Roboto:wght@300&display=optional"
                rel="stylesheet"
            />
        </Head>

        <MainFlow>
            {items.map((feed: Feed, index: Key | null | undefined) => (
            <ContentLink key={index} url={`/noticias/${index}`} title={feed.title} imgUrl={feed.enclosure?.url} hero={index === 0} />
        ))}
    </MainFlow>
  </>;
};

