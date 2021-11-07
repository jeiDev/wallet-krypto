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