export const Filter = (CardList) => {
    return CardList.filter(card => card.price < 300)
}