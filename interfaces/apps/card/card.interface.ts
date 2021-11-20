export interface CardPriceButtonI{
    title: string
    href: string
}

export interface CardPricePropsI {
    title: string
    description: string
    price: string
    button: CardPriceButtonI
    image: string
}

export interface CardCommentaryPropsI {
    name: string
    job: string
    image: string
    description: string
}

export interface CardBlogPropsI{
    title: string
    image: string
    description: string
}