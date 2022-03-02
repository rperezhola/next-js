import { ContentLinkContainer, Title, EmptyImg } from "./styles";
import Image from "next/image";

interface ContentLinkProps {
    /** The link url */
    url: string,
    /** The main title */
    title: string,
    /** Subtitle */
    subtext?: string,
    /** Is it the hero of the page? */
    hero?: boolean,
    /** Image URL */
    imgUrl?: string,
}

/** This is a ContentLink */
export default function ContentLink({url, title, subtext='', hero=false , imgUrl}: ContentLinkProps) {
    return (
        <ContentLinkContainer href={url}>
            <div>
                {imgUrl? <Image
                    src={imgUrl}
                    width={640}
                    height={384}
                    priority={hero}
                    alt={title}
                    /> :  <EmptyImg />}
                <Title>{ title }</Title>
                {subtext && <div>{subtext}</div>}
            </div>
        </ContentLinkContainer>
    );
}
