export interface CardPriceButtonI{
    title: string
    href: string
}

export interface CardPricePropsI {
    title: string
    description: string
    price: number
    button: CardPriceButtonI
    image: string
}