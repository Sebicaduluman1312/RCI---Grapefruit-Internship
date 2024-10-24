export const urlArticles = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=aea149988a0a4318b7126a316c61f710&q=Apple&pageSize=3';

export type ArticleType = {
    title: string,
    content: string,
    urlToImage: string,
    publishedAt: string,
    url: string
}